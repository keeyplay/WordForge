//mouse paralax
const card = document.querySelector(".phone");
let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{
    const rect = card.getBoundingClientRect();

    mouseX = (e.clientX - rect.left - rect.width/2)/15;
    mouseY = (e.clientY - rect.top - rect.height/2)/15;
});

function animate(){

    currentX += (mouseX-currentX)*0.1;
    currentY += (mouseY-currentY)*0.1;

    card.style.transform = `
        rotateY(${currentX}deg)
        rotateX(${-currentY}deg)
    `;

    requestAnimationFrame(animate);
}

animate();