fn main() {
    #[cfg(target_os = "macos")]
    println!("cargo:rustc-link-lib=framework=MediaPlayer");
    tauri_build::build()
}
