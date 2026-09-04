let musicplayrn = false;

function playMusicOnRepeat(filePath) {
    const audio = new Audio(filePath);
    audio.loop = true;
    audio.volume = 1.0;
    
    if(musicplayrn === false) audio.play(); musicplayrn = true;
    if(musicplayrn === true) audio.pause(); musicplayrn = true;
    
    return audio;
}