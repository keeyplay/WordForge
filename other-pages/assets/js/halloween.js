function rotateImage() {
  currentRotation = Number(document.getElementById('img-p').style.rotate.slice(0, -3)) + 50;
  document.getElementById('img-p').style.rotate = `${currentRotation}deg`;
}

function showLetter() {
    document.getElementById('me2026').style.display = 'flex'; 
    document.getElementById('me2026-2').style.display = 'flex'
}