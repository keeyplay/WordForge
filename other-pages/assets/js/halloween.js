function rotateImage() {
  currentRotation = Number(document.getElementById('img-p').style.rotate.slice(0, -3)) + 50;
  document.getElementById('img-p').style.rotate = `${currentRotation}deg`;
}
