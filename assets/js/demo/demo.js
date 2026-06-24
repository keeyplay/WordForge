// PARTICLES
const particles = document.getElementById("particles");
// THEME
const toggle = document.getElementById("themeToggle");
document.body.classList.toggle("dark");
toggle.onclick = () => {
    document.body.classList.toggle("dark");

    const childDivs = particles.querySelectorAll('div');
    childDivs.forEach((div)=> {
        if(document.body.classList.contains('dark')) div.style.background = "white";
        else div.style.background = "black";
    });
};

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



// FADE IN
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.05
});



document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});


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