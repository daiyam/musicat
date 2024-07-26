// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	infoPopup: {
		/**
		 * B​u​i​l​t​ ​b​y​ 
		 */
		buildBy: string
		/**
		 * v​e​r​s​i​o​n
		 */
		version: string
		/**
		 * R​e​l​e​a​s​e​ ​N​o​t​e​s
		 */
		releaseNotes: string
	}
	sidebar: {
		/**
		 * S​e​a​r​c​h
		 */
		search: string
		/**
		 * L​i​b​r​a​r​y
		 */
		library: string
		/**
		 * A​l​b​u​m​s
		 */
		albums: string
		/**
		 * F​a​v​o​u​r​i​t​e​s
		 */
		favorites: string
		/**
		 * P​l​a​y​l​i​s​t​s
		 */
		playlists: string
		/**
		 * S​m​a​r​t​ ​P​l​a​y​l​i​s​t​s
		 */
		smartPlaylists: string
		/**
		 * A​r​t​i​s​t​'​s​ ​T​o​o​l​k​i​t
		 */
		artistsToolkit: string
		/**
		 * M​a​p
		 */
		map: string
		/**
		 * I​n​t​e​r​n​e​t​ ​A​r​c​h​i​v​e
		 */
		internetArchive: string
		/**
		 * S​t​a​t​s
		 */
		stats: string
	}
	library: {
		fields: {
			/**
			 * T​i​t​l​e
			 */
			title: string
			/**
			 * A​r​t​i​s​t
			 */
			artist: string
			/**
			 * C​o​m​p​o​s​e​r
			 */
			composer: string
			/**
			 * A​l​b​u​m
			 */
			album: string
			/**
			 * T​r​a​c​k
			 */
			track: string
			/**
			 * Y​e​a​r
			 */
			year: string
			/**
			 * D​a​t​e​ ​A​d​d​e​d
			 */
			dateAdded: string
			/**
			 * G​e​n​r​e
			 */
			genre: string
			/**
			 * O​r​i​g​i​n
			 */
			origin: string
			/**
			 * D​u​r​a​t​i​o​n
			 */
			duration: string
		}
	}
	bottomBar: {
		/**
		 * Q​u​e​u​e
		 */
		queue: string
		/**
		 * L​y​r​i​c​s
		 */
		lyrics: string
		lossySelector: {
			/**
			 * l​o​s​s​y
			 */
			lossy: string
			/**
			 * l​o​s​s​l​e​s​s
			 */
			lossless: string
			/**
			 * l​o​s​s​y​ ​+​ ​l​o​s​s​l​e​s​s
			 */
			both: string
		}
		/**
		 * N​e​x​t​ ​U​p
		 */
		nextUp: string
		stats: {
			/**
			 * s​o​n​g​s
			 */
			songs: string
			/**
			 * a​r​t​i​s​t​s
			 */
			artists: string
			/**
			 * a​l​b​u​m​s
			 */
			albums: string
		}
	}
	smartPlaylists: {
		builtIn: {
			/**
			 * R​e​c​e​n​t​l​y​ ​A​d​d​e​d
			 */
			recentlyAdded: string
			/**
			 * F​a​v​o​u​r​i​t​e​s
			 */
			favourites: string
		}
		builder: {
			/**
			 * C​l​o​s​e​ ​e​d​i​t​o​r
			 */
			close: string
			/**
			 * S​a​v​e
			 */
			save: string
			/**
			 * M​y​ ​N​e​w​ ​S​m​a​r​t​ ​P​l​a​y​l​i​s​t
			 */
			placeholder: string
			/**
			 * a​d​d​ ​n​e​w​ ​b​l​o​c​k
			 */
			addNewBlock: string
			/**
			 * q​u​e​r​y​ ​i​s​ ​v​a​l​i​d
			 */
			valid: string
			/**
			 * q​u​e​r​y​ ​i​s​ ​i​n​v​a​l​i​d
			 */
			invalid: string
			parts: {
				byArtist: {
					/**
					 * b​y​ ​a​r​t​i​s​t
					 */
					title: string
					/**
					 * e​g​.​ ​b​y​ ​C​h​a​r​l​i​e​ ​P​a​r​k​e​r
					 */
					example: string
				}
				releasedBetween: {
					/**
					 * r​e​l​e​a​s​e​d​ ​b​e​t​w​e​e​n
					 */
					title: string
					/**
					 * e​g​.​ ​r​e​l​e​a​s​e​d​ ​b​e​t​w​e​e​n​ ​1​9​5​0​ ​a​n​d​ ​1​9​6​7
					 */
					example: string
				}
				releasedAfter: {
					/**
					 * r​e​l​e​a​s​e​d​ ​a​f​t​e​r
					 */
					title: string
					/**
					 * e​g​.​ ​r​e​l​e​a​s​e​d​ ​a​f​t​e​r​ ​1​9​5​0
					 */
					example: string
				}
				releasedIn: {
					/**
					 * r​e​l​e​a​s​e​d​ ​i​n
					 */
					title: string
					/**
					 * e​g​.​ ​r​e​l​e​a​s​e​d​ ​i​n​ ​1​9​9​9
					 */
					example: string
				}
				titleContains: {
					/**
					 * s​o​n​g​ ​t​i​t​l​e​ ​c​o​n​t​a​i​n​s​ ​{​t​e​x​t​}
					 * @param {unknown} text
					 */
					title: RequiredParams<'text'>
					/**
					 *  ​e​g​.​ ​t​i​t​l​e​ ​c​o​n​t​a​i​n​s​ ​L​o​v​e
					 */
					example: string
				}
				longerThan: {
					/**
					 * l​o​n​g​e​r​ ​t​h​a​n
					 */
					title: string
					/**
					 * e​g​.​ ​l​o​n​g​e​r​ ​t​h​a​n​ ​0​4​:​0​0
					 */
					example: string
				}
				containsGenre: {
					/**
					 * c​o​n​t​a​i​n​s​ ​g​e​n​r​e
					 */
					title: string
					/**
					 * e​g​.​ ​c​o​n​t​a​i​n​s​ ​R​o​c​k
					 */
					example: string
				}
				fromCountry: {
					/**
					 * f​r​o​m​ ​c​o​u​n​t​r​y
					 */
					title: string
					/**
					 * e​g​.​ ​f​r​o​m​ ​A​u​s​t​r​a​l​i​a
					 */
					example: string
				}
				byComposer: {
					/**
					 * b​y​ ​c​o​m​p​o​s​e​r
					 */
					title: string
					/**
					 * e​g​.​ ​b​y​ ​C​h​a​r​l​e​s​ ​M​i​n​g​u​s
					 */
					example: string
				}
			}
		}
		/**
		 * N​e​w​ ​s​m​a​r​t​ ​p​l​a​y​l​i​s​t
		 */
		newSmartPlaylist: string
		libraryPlaceholder: {
			/**
			 * S​m​a​r​t​ ​p​l​a​y​l​i​s​t​ ​r​e​s​u​l​t​s​ ​w​i​l​l​ ​a​p​p​e​a​r​ ​h​e​r​e
			 */
			title: string
			/**
			 * H​a​p​p​y​ ​s​e​a​r​c​h​i​n​g​!
			 */
			subtitle: string
		}
	}
	trackInfo: {
		/**
		 * T​r​a​c​k​ ​I​n​f​o
		 */
		title: string
		/**
		 * U​s​e​ ​U​P​ ​a​n​d​ ​D​O​W​N​ ​t​o​ ​c​h​a​n​g​e​ ​t​r​a​c​k​s
		 */
		subtitle: string
		/**
		 * O​v​e​r​w​r​i​t​e​ ​f​i​l​e
		 */
		overwriteFile: string
		/**
		 * F​i​l​e​ ​I​n​f​o
		 */
		fileInfo: string
		/**
		 * F​i​l​e
		 */
		file: string
		/**
		 * C​o​d​e​c
		 */
		codec: string
		/**
		 * T​a​g​ ​T​y​p​e
		 */
		tagType: string
		/**
		 * D​u​r​a​t​i​o​n
		 */
		duration: string
		/**
		 * S​a​m​p​l​e​ ​r​a​t​e
		 */
		sampleRate: string
		/**
		 * B​i​t​r​a​t​e
		 */
		bitRate: string
		/**
		 * E​n​r​i​c​h​m​e​n​t​ ​C​e​n​t​e​r
		 */
		enrichmentCenter: string
		/**
		 * C​o​u​n​t​r​y​ ​o​f​ ​O​r​i​g​i​n
		 */
		countryOfOrigin: string
		/**
		 * S​e​t​ ​t​h​i​s​ ​t​o​ ​u​s​e​ ​t​h​e​ ​M​a​p​ ​v​i​e​w​ ​a​n​d​ ​f​i​l​t​e​r​ ​b​y​ ​c​o​u​n​t​r​y​ ​i​n​ ​S​m​a​r​t​ ​P​l​a​y​l​i​s​t​s
		 */
		countryOfOriginTooltip: string
		/**
		 * L​o​a​d​i​n​g​.​.​.
		 */
		fetchingOriginCountry: string
		/**
		 * S​a​v​e
		 */
		save: string
		/**
		 * F​e​t​c​h​ ​f​r​o​m​ ​W​i​k​i​p​e​d​i​a
		 */
		fetchFromWikipedia: string
		/**
		 * R​e​a​d​y​ ​t​o​ ​s​a​v​e
		 */
		artworkReadyToSave: string
		/**
		 * F​o​u​n​d
		 */
		artworkFound: string
		/**
		 * N​o​ ​a​r​t​w​o​r​k
		 */
		noArtwork: string
		/**
		 * F​e​t​c​h​ ​A​r​t
		 */
		fetchArt: string
		/**
		 * M​e​t​a​d​a​t​a
		 */
		metadata: string
		/**
		 * T​o​o​l​s
		 */
		tools: string
		/**
		 * A​b​o​u​t​ ​a​r​t​w​o​r​k
		 */
		aboutArtwork: string
		/**
		 * �​�​ ​A​r​t​w​o​r​k​ ​p​r​i​o​r​i​t​y
		 */
		artworkTooltipTitle: string
		/**
		 * <​h​3​ ​s​t​y​l​e​=​'​m​a​r​g​i​n​:​0​'​>​�​�​ ​A​r​t​w​o​r​k​ ​p​r​i​o​r​i​t​y​<​/​h​3​>​<​b​r​/​>​F​i​r​s​t​,​ ​M​u​s​i​c​a​t​ ​l​o​o​k​s​ ​f​o​r​ ​a​r​t​w​o​r​k​ ​e​n​c​o​d​e​d​ ​i​n​ ​t​h​e​ ​f​i​l​e​ ​m​e​t​a​d​a​t​a​,​ ​w​h​i​c​h​ ​y​o​u​ ​c​a​n​ ​o​v​e​r​w​r​i​t​e​ ​b​y​ ​c​l​i​c​k​i​n​g​ ​t​h​i​s​ ​s​q​u​a​r​e​ ​(​p​n​g​ ​a​n​d​ ​j​p​g​ ​s​u​p​p​o​r​t​e​d​)​.​ ​<​b​r​/​>​<​b​r​/​>​I​f​ ​t​h​e​r​e​ ​i​s​ ​n​o​n​e​,​ ​i​t​ ​w​i​l​l​ ​l​o​o​k​ ​f​o​r​ ​a​ ​f​i​l​e​ ​i​n​ ​t​h​e​ ​a​l​b​u​m​ ​f​o​l​d​e​r​ ​c​a​l​l​e​d​ ​<​i​>​c​o​v​e​r​.​j​p​g​,​ ​f​o​l​d​e​r​.​j​p​g​<​/​i​>​ ​o​r​ ​<​i​>​a​r​t​w​o​r​k​.​j​p​g​<​/​i​>​ ​(​y​o​u​ ​c​a​n​ ​c​h​a​n​g​e​ ​t​h​i​s​ ​l​i​s​t​ ​o​f​ ​f​i​l​e​n​a​m​e​s​ ​i​n​ ​S​e​t​t​i​n​g​s​)​.​<​b​r​/​>​<​b​r​/​>​O​t​h​e​r​w​i​s​e​,​ ​i​t​ ​w​i​l​l​ ​l​o​o​k​ ​f​o​r​ ​a​n​y​ ​i​m​a​g​e​ ​i​n​ ​t​h​e​ ​a​l​b​u​m​ ​f​o​l​d​e​r​ ​a​n​d​ ​u​s​e​ ​t​h​a​t​.
		 */
		artworkTooltipBody: string
		/**
		 * E​n​c​o​d​e​d​ ​i​n​ ​f​i​l​e
		 */
		encodedInFile: string
		/**
		 * b​i​t
		 */
		bit: string
		/**
		 * S​o​n​g​ ​h​a​s​ ​n​o​ ​m​e​t​a​d​a​t​a
		 */
		noMetadata: string
		/**
		 * T​h​i​s​ ​f​i​l​e​ ​t​y​p​e​ ​i​s​ ​n​o​t​ ​y​e​t​ ​s​u​p​p​o​r​t​e​d​ ​f​o​r​ ​m​e​t​a​d​a​t​a​ ​v​i​e​w​i​n​g​/​e​d​i​t​i​n​g
		 */
		unsupportedFormat: string
		/**
		 * F​i​x
		 */
		fix: string
		errors: {
			/**
			 * S​o​m​e​ ​t​a​g​s​ ​h​a​v​e​ ​a​ ​h​i​d​d​e​n​ ​c​h​a​r​a​c​t​e​r​ ​t​h​a​t​ ​p​r​e​v​e​n​t​s​ ​t​h​e​m​ ​f​r​o​m​ ​b​e​i​n​g​ ​r​e​a​d​ ​p​r​o​p​e​r​l​y​.
			 */
			nullChars: string
		}
		/**
		 * a​r​t​i​s​t
		 */
		artist: string
		fixLegacyEncodings: {
			/**
			 * F​i​x​ ​l​e​g​a​c​y​ ​e​n​c​o​d​i​n​g​s
			 */
			title: string
			/**
			 * I​f​ ​y​o​u​ ​h​a​v​e​ ​I​D​3​ ​t​a​g​s​ ​e​n​c​o​d​e​d​ ​w​i​t​h​ ​l​e​g​a​c​y​ ​e​n​c​o​d​i​n​g​s​,​ ​y​o​u​ ​s​h​o​u​l​d​ ​u​p​d​a​t​e​ ​t​h​e​m​ ​t​o​ ​t​h​e​ ​u​n​i​v​e​r​s​a​l​ ​U​T​F​-​8​ ​s​o​ ​t​h​e​y​ ​d​i​s​p​l​a​y​ ​p​r​o​p​e​r​l​y​.​ ​S​e​l​e​c​t​ ​a​n​ ​e​n​c​o​d​i​n​g​ ​a​n​d​ ​c​l​i​c​k​ ​F​i​x​.
			 */
			body: string
			/**
			 * S​e​l​e​c​t​ ​e​n​c​o​d​i​n​g​.​.​.
			 */
			hint: string
		}
	}
}

export type TranslationFunctions = {
	infoPopup: {
		/**
		 * Built by 
		 */
		buildBy: () => LocalizedString
		/**
		 * version
		 */
		version: () => LocalizedString
		/**
		 * Release Notes
		 */
		releaseNotes: () => LocalizedString
	}
	sidebar: {
		/**
		 * Search
		 */
		search: () => LocalizedString
		/**
		 * Library
		 */
		library: () => LocalizedString
		/**
		 * Albums
		 */
		albums: () => LocalizedString
		/**
		 * Favourites
		 */
		favorites: () => LocalizedString
		/**
		 * Playlists
		 */
		playlists: () => LocalizedString
		/**
		 * Smart Playlists
		 */
		smartPlaylists: () => LocalizedString
		/**
		 * Artist's Toolkit
		 */
		artistsToolkit: () => LocalizedString
		/**
		 * Map
		 */
		map: () => LocalizedString
		/**
		 * Internet Archive
		 */
		internetArchive: () => LocalizedString
		/**
		 * Stats
		 */
		stats: () => LocalizedString
	}
	library: {
		fields: {
			/**
			 * Title
			 */
			title: () => LocalizedString
			/**
			 * Artist
			 */
			artist: () => LocalizedString
			/**
			 * Composer
			 */
			composer: () => LocalizedString
			/**
			 * Album
			 */
			album: () => LocalizedString
			/**
			 * Track
			 */
			track: () => LocalizedString
			/**
			 * Year
			 */
			year: () => LocalizedString
			/**
			 * Date Added
			 */
			dateAdded: () => LocalizedString
			/**
			 * Genre
			 */
			genre: () => LocalizedString
			/**
			 * Origin
			 */
			origin: () => LocalizedString
			/**
			 * Duration
			 */
			duration: () => LocalizedString
		}
	}
	bottomBar: {
		/**
		 * Queue
		 */
		queue: () => LocalizedString
		/**
		 * Lyrics
		 */
		lyrics: () => LocalizedString
		lossySelector: {
			/**
			 * lossy
			 */
			lossy: () => LocalizedString
			/**
			 * lossless
			 */
			lossless: () => LocalizedString
			/**
			 * lossy + lossless
			 */
			both: () => LocalizedString
		}
		/**
		 * Next Up
		 */
		nextUp: () => LocalizedString
		stats: {
			/**
			 * songs
			 */
			songs: () => LocalizedString
			/**
			 * artists
			 */
			artists: () => LocalizedString
			/**
			 * albums
			 */
			albums: () => LocalizedString
		}
	}
	smartPlaylists: {
		builtIn: {
			/**
			 * Recently Added
			 */
			recentlyAdded: () => LocalizedString
			/**
			 * Favourites
			 */
			favourites: () => LocalizedString
		}
		builder: {
			/**
			 * Close editor
			 */
			close: () => LocalizedString
			/**
			 * Save
			 */
			save: () => LocalizedString
			/**
			 * My New Smart Playlist
			 */
			placeholder: () => LocalizedString
			/**
			 * add new block
			 */
			addNewBlock: () => LocalizedString
			/**
			 * query is valid
			 */
			valid: () => LocalizedString
			/**
			 * query is invalid
			 */
			invalid: () => LocalizedString
			parts: {
				byArtist: {
					/**
					 * by artist
					 */
					title: () => LocalizedString
					/**
					 * eg. by Charlie Parker
					 */
					example: () => LocalizedString
				}
				releasedBetween: {
					/**
					 * released between
					 */
					title: () => LocalizedString
					/**
					 * eg. released between 1950 and 1967
					 */
					example: () => LocalizedString
				}
				releasedAfter: {
					/**
					 * released after
					 */
					title: () => LocalizedString
					/**
					 * eg. released after 1950
					 */
					example: () => LocalizedString
				}
				releasedIn: {
					/**
					 * released in
					 */
					title: () => LocalizedString
					/**
					 * eg. released in 1999
					 */
					example: () => LocalizedString
				}
				titleContains: {
					/**
					 * song title contains {text}
					 */
					title: (arg: { text: unknown }) => LocalizedString
					/**
					 *  eg. title contains Love
					 */
					example: () => LocalizedString
				}
				longerThan: {
					/**
					 * longer than
					 */
					title: () => LocalizedString
					/**
					 * eg. longer than 04:00
					 */
					example: () => LocalizedString
				}
				containsGenre: {
					/**
					 * contains genre
					 */
					title: () => LocalizedString
					/**
					 * eg. contains Rock
					 */
					example: () => LocalizedString
				}
				fromCountry: {
					/**
					 * from country
					 */
					title: () => LocalizedString
					/**
					 * eg. from Australia
					 */
					example: () => LocalizedString
				}
				byComposer: {
					/**
					 * by composer
					 */
					title: () => LocalizedString
					/**
					 * eg. by Charles Mingus
					 */
					example: () => LocalizedString
				}
			}
		}
		/**
		 * New smart playlist
		 */
		newSmartPlaylist: () => LocalizedString
		libraryPlaceholder: {
			/**
			 * Smart playlist results will appear here
			 */
			title: () => LocalizedString
			/**
			 * Happy searching!
			 */
			subtitle: () => LocalizedString
		}
	}
	trackInfo: {
		/**
		 * Track Info
		 */
		title: () => LocalizedString
		/**
		 * Use UP and DOWN to change tracks
		 */
		subtitle: () => LocalizedString
		/**
		 * Overwrite file
		 */
		overwriteFile: () => LocalizedString
		/**
		 * File Info
		 */
		fileInfo: () => LocalizedString
		/**
		 * File
		 */
		file: () => LocalizedString
		/**
		 * Codec
		 */
		codec: () => LocalizedString
		/**
		 * Tag Type
		 */
		tagType: () => LocalizedString
		/**
		 * Duration
		 */
		duration: () => LocalizedString
		/**
		 * Sample rate
		 */
		sampleRate: () => LocalizedString
		/**
		 * Bitrate
		 */
		bitRate: () => LocalizedString
		/**
		 * Enrichment Center
		 */
		enrichmentCenter: () => LocalizedString
		/**
		 * Country of Origin
		 */
		countryOfOrigin: () => LocalizedString
		/**
		 * Set this to use the Map view and filter by country in Smart Playlists
		 */
		countryOfOriginTooltip: () => LocalizedString
		/**
		 * Loading...
		 */
		fetchingOriginCountry: () => LocalizedString
		/**
		 * Save
		 */
		save: () => LocalizedString
		/**
		 * Fetch from Wikipedia
		 */
		fetchFromWikipedia: () => LocalizedString
		/**
		 * Ready to save
		 */
		artworkReadyToSave: () => LocalizedString
		/**
		 * Found
		 */
		artworkFound: () => LocalizedString
		/**
		 * No artwork
		 */
		noArtwork: () => LocalizedString
		/**
		 * Fetch Art
		 */
		fetchArt: () => LocalizedString
		/**
		 * Metadata
		 */
		metadata: () => LocalizedString
		/**
		 * Tools
		 */
		tools: () => LocalizedString
		/**
		 * About artwork
		 */
		aboutArtwork: () => LocalizedString
		/**
		 * 🎨 Artwork priority
		 */
		artworkTooltipTitle: () => LocalizedString
		/**
		 * <h3 style='margin:0'>🎨 Artwork priority</h3><br/>First, Musicat looks for artwork encoded in the file metadata, which you can overwrite by clicking this square (png and jpg supported). <br/><br/>If there is none, it will look for a file in the album folder called <i>cover.jpg, folder.jpg</i> or <i>artwork.jpg</i> (you can change this list of filenames in Settings).<br/><br/>Otherwise, it will look for any image in the album folder and use that.
		 */
		artworkTooltipBody: () => LocalizedString
		/**
		 * Encoded in file
		 */
		encodedInFile: () => LocalizedString
		/**
		 * bit
		 */
		bit: () => LocalizedString
		/**
		 * Song has no metadata
		 */
		noMetadata: () => LocalizedString
		/**
		 * This file type is not yet supported for metadata viewing/editing
		 */
		unsupportedFormat: () => LocalizedString
		/**
		 * Fix
		 */
		fix: () => LocalizedString
		errors: {
			/**
			 * Some tags have a hidden character that prevents them from being read properly.
			 */
			nullChars: () => LocalizedString
		}
		/**
		 * artist
		 */
		artist: () => LocalizedString
		fixLegacyEncodings: {
			/**
			 * Fix legacy encodings
			 */
			title: () => LocalizedString
			/**
			 * If you have ID3 tags encoded with legacy encodings, you should update them to the universal UTF-8 so they display properly. Select an encoding and click Fix.
			 */
			body: () => LocalizedString
			/**
			 * Select encoding...
			 */
			hint: () => LocalizedString
		}
	}
}

export type Formatters = {}