// THEME
const toggle = document.getElementById("themeToggle");

if(!localStorage.getItem("ThemeMode")) { document.body.classList.toggle("dark"); toggle.src = "../../assets/pic/dark.png"; }
else if(localStorage.getItem("ThemeMode") === "dark") { document.body.classList.toggle("dark"); toggle.src = "../../assets/pic/dark.png"; }
else toggle.src = "../../assets/pic/sun.png"
toggle.onclick = () => {
    document.body.classList.toggle("dark");
    if(!localStorage.getItem("ThemeMode")) { localStorage.setItem("ThemeMode", "light"); toggle.src = "../../assets/pic/sun.png" } 
    else if(localStorage.getItem("ThemeMode") === "light") { localStorage.setItem("ThemeMode", "dark"); toggle.src = "../../assets/pic/dark.png"; }
    else if(localStorage.getItem("ThemeMode") === "dark") { localStorage.setItem("ThemeMode", "light"); toggle.src = "../../assets/pic/sun.png"; }

    const childDivs = particles.querySelectorAll('div');
    childDivs.forEach((div)=> {
        if(document.body.classList.contains('dark')) div.style.background = "white";
        else div.style.background = "black";
    });
};


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

// FADES IN
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showS");
        } else {
            entry.target.classList.remove("showS");
        }
    });
}, {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.05
});



document.querySelectorAll(".fadeS").forEach(el => {
    observer1.observe(el);
});