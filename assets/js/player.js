const playMusic = document.getElementById("playMusic");
const playMusicSymbol = document.getElementById("playMusicSymbol");
let musicplayrn = false;

const audio = new Audio("../assets/music/music.mp3");
audio.loop = true;
audio.volume = 1.0;

function toggleMusic() {
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