const playMusic = document.getElementById("playMusic");
const playMusicSymbol = document.getElementById("playMusicSymbol");
const listofmusic = document.getElementById("link");

let musicplayrn = false;

let audio = new Audio("../assets/music/music.mp3");
audio.loop = true;
audio.volume = 1.0;

function changeTrack(newPath) {
    audio.pause();
    audio.currentTime = 0;
    
    audio.src = newPath;
    toggleMusic();
    
    if (musicplayrn) {
        audio.play();
    }
}

function toggleMusic() {
    if (musicplayrn === false) {
        audio.play();
        musicplayrn = true; 
        playMusicSymbol.innerText = "⏸";
        listofmusic.style.display = "none";
    } else {
        audio.pause();
        musicplayrn = false;
        playMusicSymbol.innerText = "▷";
        listofmusic.style.display = "block";
    }
}

playMusic.addEventListener('click', toggleMusic);
