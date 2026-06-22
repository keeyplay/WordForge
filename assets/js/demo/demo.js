// THEME
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

// PARTICLES
const particles = document.getElementById("particles");

for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 8 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 5 + "s";
    if(document.body.background === "white") {
        p.style.background = "black";
    } else {
        p.style.background = "white";
    }
    particles.appendChild(p);
}



// FADE IN
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});



document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

