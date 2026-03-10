let ThemeMode = localStorage.getItem("ThemeMode") || "light";

function ThemeSwitchFunc() {
    const isDark = localStorage.getItem("ThemeMode") == "dark";
    
    // Update theme toggle icon
    document.getElementById("switchTheme").src = isDark ? "assets/pic/dark.png" : "assets/pic/sun.png";
    
    // Core layout elements
    document.body.style.background = isDark ? "black" : "white";
    document.body.style.color = isDark ? "white" : "black";

    document.querySelectorAll(".links").forEach(el => {
        el.style.filter = isDark ? "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))" : "none";
    });
}

function clickThemeSwitchBut() {
    if(ThemeMode == "light") {
        ThemeMode = "dark";
        localStorage.setItem("ThemeMode", "dark");

        ThemeSwitchFunc()
    } else if(ThemeMode == "dark") {
        ThemeMode = "light";
        localStorage.setItem("ThemeMode", "light");

        ThemeSwitchFunc()
    }
};