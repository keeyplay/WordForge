// PARTICLES
const particles = document.getElementById("particles");
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function startParticles() {
    let countParticles = 500 ;
    if(isMobile) countParticles = 300;
    for (let i = 0; i < 500; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");

        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 3 + Math.random() * 8 + "s";
        p.style.animationDelay = Math.random() * 5 + "s";
        if(document.body.classList.contains('dark')) {
            p.style.background = "white";
        } else {
            p.style.background = "black";
        }
        particles.appendChild(p);
    }
}

startParticles()