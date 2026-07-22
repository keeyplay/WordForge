let ThemeMode = localStorage.getItem("ThemeMode") || "light";

function ThemeSwitchFunc(theme) {
    if(localStorage.getItem("ThemeMode") !== theme && theme !== undefined) localStorage.setItem("ThemeMode", theme);
    const root = document.documentElement;
    if(theme == "light" || theme == "dark") {
        const isDark = localStorage.getItem("ThemeMode") == "dark";
        
        // Update theme toggle icon
        document.getElementById("switchTheme").src = isDark ? "assets/pic/dark.png" : "assets/pic/sun.png";
        document.getElementById("buttonLocalAccounts").src = isDark ? "assets/pic/3lines_dark.png" : "assets/pic/3lines_light.png";
        
        // border
        document.getElementById("card-front").style.border = isDark ? "1px solid white" : "0px";
        document.getElementById("input-code-premium").style.border = isDark ? "1px solid #444" : "1px solid #ccc";
        if(isDark) {
            document.querySelectorAll('.stats-section, .stat-card, .card-edit, .modal, .btn-modal-cancel, .btn-modal-save, .premium-modal-light').forEach(el => {
                el.style.border = '1px solid gray';
            });
        }

        // Particles
        const particles = particlesDIV.querySelectorAll("div");

        particles.forEach((div) => {
            if(isDark) div.style.background = "white";
            else div.style.background = "black";
        });
        
        // Soc links
        document.querySelectorAll('.link, #SwitchSector').forEach(el => {
            el.style.filter = isDark ? "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))" : "none";
        });
        
        // change CSS variables
        if (isDark) {
            root.style.setProperty('--wf-orange', '#000000');
            root.style.setProperty('--wf-orange-col', 'white');
            root.style.setProperty('--wf-white', '#ffffff');      
            root.style.setProperty('--wf-black', '#ffffff');        
            root.style.setProperty('--wf-dark-text', '#ffffff');   
            root.style.setProperty('--wf-muted', '#ffffff');      
            root.style.setProperty('--wf-light-gray', '#ffffff');   
            
            root.style.setProperty('--wf-card-bg', '#000000');   
            root.style.setProperty('--wf-orange-pale', 'rgba(0, 0, 0, 0.05)');
            root.style.setProperty('--wf-orange-pale-2', 'rgba(0, 0, 0, 0.03)');
            root.style.setProperty('--wf-orange-soft', 'rgba(0, 0, 0, 0.07)');
            root.style.setProperty('--wf-header-bg', 'rgba(0, 0, 0, 0.6)');
            root.style.setProperty('--wf-overlay-dark', 'rgba(0, 0, 0, 0.85)');
            root.style.setProperty('--wf-border-black', 'rgba(0, 0, 0, 0.1)');
            
            root.style.setProperty('--wf-danger', 'white');       
            root.style.setProperty('--wf-red-btn', 'rgba(204, 75, 44, 0.2)');
            root.style.setProperty('--wf-red-btn-hover', 'rgba(204, 75, 44, 0.5)');
            root.style.setProperty('--wf-green-btn', 'rgba(34, 139, 34, 0.2)');
            root.style.setProperty('--wf-green-btn-hover', 'rgba(34, 139, 34, 0.5)');
            
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(0, 0, 0, 0.8)');
            root.style.setProperty('--wf-shadow-sm', '0 4px 12px rgba(0, 0, 0, 0.6)');

        } else {
            root.style.setProperty('--wf-orange', 'orange');
            root.style.setProperty('--wf-orange-col', 'orange');
            root.style.setProperty('--wf-white', '#fffbf7');
            root.style.setProperty('--wf-black', '#000000');
            root.style.setProperty('--wf-dark-text', '#333');
            root.style.setProperty('--wf-muted', '#6b7280');
            root.style.setProperty('--wf-light-gray', '#9ca3af');
            
            root.style.setProperty('--wf-card-bg', '#fffbf7');
            root.style.setProperty('--wf-orange-pale', 'rgba(255, 255, 255, 0.18)');
            root.style.setProperty('--wf-orange-pale-2', 'rgba(255, 255, 255, 0.08)');
            root.style.setProperty('--wf-orange-soft', 'rgba(255, 172, 37, 0.5)');
            root.style.setProperty('--wf-header-bg', 'rgba(0, 0, 0, 0.06)');
            root.style.setProperty('--wf-overlay-dark', 'rgba(0, 0, 0, 0.5)');
            root.style.setProperty('--wf-border-black', 'rgba(0,0,0,0.12)');
            
            root.style.setProperty('--wf-danger', 'black');
            root.style.setProperty('--wf-red-btn', 'rgba(255, 0, 0, 0.2)');
            root.style.setProperty('--wf-red-btn-hover', 'rgba(255, 0, 0, 0.5)');
            root.style.setProperty('--wf-green-btn', 'rgba(13, 255, 0, 0.2)');
            root.style.setProperty('--wf-green-btn-hover', 'rgba(13, 255, 0, 0.5)');
            
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(0, 0, 0, 0.2)');
            root.style.setProperty('--wf-shadow-sm', '0 2px 12px rgba(0, 0, 0, 0.12)');
        }
    } else {
        if(theme == "green") {
            document.getElementById("switchTheme").src = "assets/pic/dark.png";
        document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
        document.getElementById("card-front").style.border = "1px solid #00ff41";
        document.getElementById("input-code-premium").style.border = "1px solid #00ff41";
        document.querySelectorAll('.stats-section, .stat-card, .card-edit, .modal, .btn-modal-cancel, .btn-modal-save, .premium-modal-light').forEach(el => {
            el.style.border = '1px solid #00ff41';
        });
        document.querySelectorAll('.link, #SwitchSector').forEach(el => {
            el.style.filter = "drop-shadow(0px 0px 10px rgba(0, 255, 65, 0.5))";
        });
        const particles = particlesDIV.querySelectorAll("div");
        particles.forEach((div) => {
            div.style.background = "#00ff41";
        });
        
        root.style.setProperty('--wf-orange', '#00ff41');
        root.style.setProperty('--wf-orange-col', '#00ff41');
        root.style.setProperty('--wf-white', '#fefefe');
        root.style.setProperty('--wf-black', '#00ff41');
        root.style.setProperty('--wf-dark-text', '#b0ffb0');
        root.style.setProperty('--wf-muted', '#66cc88');
        root.style.setProperty('--wf-light-gray', '#88dd99');
        root.style.setProperty('--wf-card-bg', '#0f1a0f');
        root.style.setProperty('--wf-orange-pale', 'rgba(0, 255, 65, 0.08)');
        root.style.setProperty('--wf-orange-pale-2', 'rgba(0, 255, 65, 0.04)');
        root.style.setProperty('--wf-orange-soft', 'rgba(0, 255, 65, 0.15)');
        root.style.setProperty('--wf-header-bg', 'rgba(0, 20, 0, 0.85)');
        root.style.setProperty('--wf-overlay-dark', 'rgba(0, 10, 0, 0.9)');
        root.style.setProperty('--wf-border-black', 'rgba(0, 255, 65, 0.15)');
        root.style.setProperty('--wf-danger', '#ff4477');
        root.style.setProperty('--wf-red-btn', 'rgba(255, 68, 119, 0.2)');
        root.style.setProperty('--wf-red-btn-hover', 'rgba(255, 68, 119, 0.5)');
        root.style.setProperty('--wf-green-btn', 'rgba(0, 255, 65, 0.25)');
        root.style.setProperty('--wf-green-btn-hover', 'rgba(0, 255, 65, 0.55)');
        root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(0, 255, 65, 0.15)');
        root.style.setProperty('--wf-shadow-sm', '0 4px 12px rgba(0, 255, 65, 0.1)');
        }
    }
}
ThemeSwitchFunc(localStorage.getItem("ThemeMode"));

document.getElementById("ThemeSwitcher").addEventListener('click', function() {
    // if(ThemeMode == "light") {
    //     ThemeMode = "dark";
    //     localStorage.setItem("ThemeMode", "dark");

    //     ThemeSwitchFunc()
    // } else if(ThemeMode == "dark") {
    //     ThemeMode = "light";
    //     localStorage.setItem("ThemeMode", "light");

    //     ThemeSwitchFunc()
    // }
    openThemeMenu();
});

const closeThemeMenuDiv = document.getElementById('closethemes');

closeThemeMenuDiv.addEventListener('click', function() {
    closeThemeMenu();
});

function openThemeMenu() {
    document.getElementById('themeMenu').style.display = "flex";
}

function closeThemeMenu() {
    document.getElementById('themeMenu').style.display = "none";
}

function AllowThemes() {
    reloadPremium().then((isPremium) => {
        if (isPremium) {
            alert("Theme is not available yet");
        } else {
            alert("Error. You dont have WordForge Premium");
        }
    });
}