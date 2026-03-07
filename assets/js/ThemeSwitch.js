let ThemeMode = localStorage.getItem("ThemeMode") || "light";

function ThemeSwitchFunc() {
    const isDark = localStorage.getItem("ThemeMode") == "dark";
    
    // Update theme toggle icon
    document.getElementById("switchTheme").src = isDark ? "assets/pic/dark.png" : "assets/pic/sun.png";
    
    // Core layout elements
    document.body.style.background = isDark ? "black" : "white";
    document.getElementById("trainer-page").style.background = isDark ? "black" : "orange";
    document.getElementById("card-front").style.background = isDark ? "black" : "white";
    document.getElementById("card-front").style.border = isDark ? "1px solid white" : "0px";
    document.getElementById("card-word").style.color = isDark ? "white" : "black";
    document.getElementById("under-card").style.background = isDark ? "black" : "white";
    document.getElementById("under-card1").style.background = isDark ? "black" : "white";
    
    // Action buttons text color
    const textColor = isDark ? "black" : "orange";
    document.getElementById("addcard").style.color = textColor;
    document.getElementById("addcardSym").style.color = textColor;
    document.getElementById("editcard").style.color = textColor;
    document.getElementById("editcardSym").style.color = textColor;
    document.getElementById("import").style.color = textColor;
    document.getElementById("export").style.color = textColor;
    
    // Stats page
    document.getElementById("stats-panel").style.background = isDark ? "black" : "white";
    document.getElementById("progressTxT").style.color = isDark ? "gray" : "black";
    
    // Stats sections and cards
    document.querySelectorAll('.stats-section, .stat-card').forEach(el => {
        el.style.background = isDark ? 'black' : 'white';
        el.style.border = '1px solid gray';
    });
    
    // Soc links
    document.querySelectorAll('.link').forEach(el => {
        el.style.filter = isDark ? "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))" : "none";
    });
    
    // Modal windows background
    document.getElementById("modal").style.background = isDark ? "black" : "white";
    document.getElementById("modal-edit").style.background = isDark ? "black" : "white";
    
    // Modal buttons (keep orange in both themes)
    document.getElementById("btn-modal-save").style.background = isDark ? "var(--orange-pale-2)" : "orange";
    document.getElementById("btn-modal-delete-all-edit").style.background = isDark ? "var(--orange-pale-2)" : "orange";
    
    // Modal labels text color
    document.querySelectorAll(".modal-label").forEach(el => {
        el.style.color = isDark ? "white" : "black";
    });
    
    // Edit modal cards text styling
    document.querySelectorAll(".text-of-card").forEach(el => {
        if (isDark) {
            el.style.color = "black";
            el.style.textShadow = '0px 0px 2px white';
        } else {
            el.style.color = ""; // reset to default
            el.style.textShadow = "";
        }
    });
}
ThemeSwitchFunc()

document.getElementById("ThemeSwitcher").addEventListener('click', function() {
    if(ThemeMode == "light") {
        ThemeMode = "dark";
        localStorage.setItem("ThemeMode", "dark");

        ThemeSwitchFunc()
    } else if(ThemeMode == "dark") {
        ThemeMode = "light";
        localStorage.setItem("ThemeMode", "light");

        ThemeSwitchFunc()
    }
});