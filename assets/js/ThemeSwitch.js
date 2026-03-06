let ThemeMode = localStorage.getItem("ThemeMode") || "light";

function ThemeSwitchFunc() {
    if(localStorage.getItem("ThemeMode") == "dark") {
        document.getElementById("switchTheme").src = "assets/pic/dark.png"
        //switch theme visual
        document.body.style.background = "black";
        document.getElementById("trainer-page").style.background = "black";
        document.getElementById("card-front").style.background = "black";
        document.getElementById("card-front").style.border = "1px solid white";
        document.getElementById("card-word").style.color = "white";
        document.getElementById("under-card").style.background = "black";
        document.getElementById("under-card1").style.background = "black";
        document.getElementById("addcard").style.color = "black";
        document.getElementById("addcardSym").style.color = "black";
        document.getElementById("editcard").style.color = "black";
        document.getElementById("editcardSym").style.color = "black";
        document.getElementById("import").style.color = "black";
        document.getElementById("export").style.color = "black";
        document.getElementById("stats-panel").style.background = "black";
        document.querySelectorAll('.link').forEach(el => {
            el.style.filter = "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))";
        });
        document.querySelectorAll('.stats-section').forEach(el => {
            el.style.background = 'black';
            el.style.border = '1px solid gray';
        });
        document.querySelectorAll('.stat-card').forEach(el => {
            el.style.background = 'black';
            el.style.border = '1px solid gray';
        });
        document.getElementById("progressTxT").style.color = "gray";
    } else if(localStorage.getItem("ThemeMode") == "light") {
        document.getElementById("switchTheme").src = "assets/pic/sun.png"
        //switch theme visual
        document.body.style.background = "white";
        document.getElementById("trainer-page").style.background = "orange";
        document.getElementById("card-front").style.background = "white";
        document.getElementById("card-front").style.border = "0px";
        document.getElementById("card-word").style.color = "black";
        document.getElementById("under-card").style.background = "white";
        document.getElementById("under-card1").style.background = "white";
        document.getElementById("addcard").style.color = "orange";
        document.getElementById("addcardSym").style.color = "orange";
        document.getElementById("editcard").style.color = "orange";
        document.getElementById("editcardSym").style.color = "orange";
        document.getElementById("import").style.color = "orange";
        document.getElementById("export").style.color = "orange";
        document.getElementById("stats-panel").style.background = "white";
        document.querySelectorAll('.stats-section').forEach(el => {
            el.style.background = 'white';
            el.style.border = '1px solid gray';
        });
        document.querySelectorAll('.stat-card').forEach(el => {
            el.style.background = 'white';
            el.style.border = '1px solid gray';
        });
        document.getElementById("progressTxT").style.color = "black";
    }
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