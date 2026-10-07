// PARTICLES
const particles = document.getElementById("particles");

function startParticles() {
    let countParticles = 500;
    if(isMobile) countParticles = 200;
    for (let i = 0; i < countParticles; i++) {
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

isSlowInternet().then(result => {
    if(!result) startParticles();
    console.log("slow connection: " + result);
});


async function isSlowInternet() {
  if (navigator.connection) {
    const type = navigator.connection.effectiveType; // 'slow-2g', '2g', '3g', '4g'
    return type === 'slow-2g' || type === '2g' || type === '3g';
  }

  try {
    const start = performance.now();
    await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
    const duration = performance.now() - start;

    return duration > 350; 
  } catch (e) {
    return true; 
  }
}

