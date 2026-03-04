let ThemeMode = "light";

document.getElementById("ThemeSwitcher").addEventListener('click', function() {
    if(ThemeMode = "light") {
        ThemeMode = "dark";
    } else if(ThemeMode = "dark") {
        ThemeMode = "light";
    }
});