let ThemeMode = localStorage.getItem("ThemeMode") || "light";

document.getElementById("ThemeSwitcher").addEventListener('click', function() {
    if(ThemeMode == "light") {
        ThemeMode = "dark";
        document.getElementById("switchTheme").src = "assets/pic/dark.png"
        localStorage.setItem("ThemeMode", "dark");
    } else if(ThemeMode == "dark") {
        ThemeMode = "light";
        document.getElementById("switchTheme").src = "assets/pic/sun.png"
        localStorage.setItem("ThemeMode", "light");
    }
});