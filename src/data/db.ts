// db.ts
import Dexie, { type Table } from "dexie";
import type { Album, ArtistProject, ContentItem, Song, SongProject } from "src/App";
import type { SavedSmartQuery } from "src/lib/smart-query/QueryPart";

export class MySubClassedDexie extends Dexie {
    // 'songs' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    songs!: Table<Song>;
    albums!: Table<Album>;
    smartQueries!: Table<SavedSmartQuery>;
    songProjects!: Table<SongProject>;
    artistProjects!: Table<ArtistProject>;
    scrapbook!: Table<ContentItem>;
    constructor() {
        super("musicatdb");
        this.version(5).stores({
            songs: "id, title, artist, album, genre, year, duration, isFavourite, [artist+year+album+trackNumber], [artist+album+trackNumber], [album+trackNumber], [artist+album]", // Primary key and indexed props
            albums: "id, title, artist, year",
            smartQueries: "name",
            artistProjects: "name",
            songProjects: "++id, title, artist, album",
            scrapbook: "++id, name"
        });
    }
}

export const db = new MySubClassedDexie();
