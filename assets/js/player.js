const playMusic = document.getElementById("playMusic");
const playMusicSymbol = document.getElementById("playMusicSymbol");
let musicplayrn = false;
// if(localStorage.getItem("musicplayrn")) musicplayrn = localStorage.getItem("musicplayrn");
// else localStorage.setItem(false);

let audio = new Audio("../assets/music/music.mp3");
audio.loop = true;
audio.volume = 1.0;

function toggleMusic(path) {
    // make argument path works
    if(path !== undefined) audio = new Audio(path);
    if (musicplayrn === false) {
        audio.play();
        musicplayrn = true; 
        playMusicSymbol.innerText = "⏸";
    } else {
        audio.pause();
        musicplayrn = false;
        playMusicSymbol.innerText = "▷";
    }
}

playMusic.addEventListener('click', toggleMusic);