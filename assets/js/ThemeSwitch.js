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
        if(theme == "green" && reloadPremium() === true) {
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
        } else if(theme == "blue" && reloadPremium() === true) {
            document.getElementById("switchTheme").src = "assets/pic/dark.png";
            document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
            document.getElementById("card-front").style.border = "1px solid transparent";
            document.getElementById("card-front").style.background = "linear-gradient(145deg, rgba(0, 180, 216, 0.12), rgba(150, 50, 255, 0.08))";
            document.getElementById("card-front").style.borderImage = "linear-gradient(135deg, #0088ff, #00d4ff, #a855f7, #ff44aa) 1";
            document.getElementById("input-code-premium").style.border = "1px solid transparent";
            document.getElementById("input-code-premium").style.background = "linear-gradient(145deg, rgba(0, 180, 216, 0.08), rgba(150, 50, 255, 0.05))";
            document.getElementById("input-code-premium").style.borderImage = "linear-gradient(135deg, #0088ff, #00d4ff, #a855f7, #ff44aa) 1";
            document.querySelectorAll('.stats-section, .stat-card, .card-edit, .modal, .btn-modal-cancel, .btn-modal-save, .premium-modal-light').forEach(el => {
                el.style.border = '1px solid transparent';
                el.style.background = 'linear-gradient(145deg, rgba(0, 180, 216, 0.06), rgba(150, 50, 255, 0.04))';
                el.style.borderImage = 'linear-gradient(135deg, #0088ff, #00d4ff, #a855f7, #ff44aa) 1';
            });
            document.querySelectorAll('.link, #SwitchSector').forEach(el => {
                el.style.filter = "drop-shadow(0px 0px 10px rgba(0, 136, 255, 0.3)) drop-shadow(0px 0px 10px rgba(168, 85, 247, 0.2))";
            });
            const particles = particlesDIV.querySelectorAll("div");
            particles.forEach((div) => {
                div.style.background = "linear-gradient(135deg, #0088ff, #00d4ff, #a855f7, #ff44aa)";
            });

            root.style.setProperty('--wf-orange', 'linear-gradient(135deg, #0088ff, #00d4ff, #a855f7, #ff44aa)');
            root.style.setProperty('--wf-orange-col', '#0088ff');
            root.style.setProperty('--wf-white', '#e8f0ff');
            root.style.setProperty('--wf-black', '#0066cc');
            root.style.setProperty('--wf-dark-text', '#b0ccee');
            root.style.setProperty('--wf-muted', '#4a7a9e');
            root.style.setProperty('--wf-light-gray', '#6a9abe');
            root.style.setProperty('--wf-card-bg', '#080e16');
            root.style.setProperty('--wf-orange-pale', 'rgba(0, 136, 255, 0.06)');
            root.style.setProperty('--wf-orange-pale-2', 'rgba(0, 136, 255, 0.03)');
            root.style.setProperty('--wf-orange-soft', 'rgba(0, 136, 255, 0.1)');
            root.style.setProperty('--wf-header-bg', 'rgba(4, 10, 20, 0.9)');
            root.style.setProperty('--wf-overlay-dark', 'rgba(2, 6, 14, 0.95)');
            root.style.setProperty('--wf-border-black', 'rgba(0, 136, 255, 0.12)');
            root.style.setProperty('--wf-danger', '#ff4477');
            root.style.setProperty('--wf-red-btn', 'rgba(255, 68, 119, 0.2)');
            root.style.setProperty('--wf-red-btn-hover', 'rgba(255, 68, 119, 0.5)');
            root.style.setProperty('--wf-green-btn', 'rgba(0, 136, 255, 0.2)');
            root.style.setProperty('--wf-green-btn-hover', 'rgba(0, 136, 255, 0.45)');
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(0, 136, 255, 0.1)');
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(0, 180, 216, 0.1)');
        } else if(theme == "purple" && reloadPremium() === true) {
            document.getElementById("switchTheme").src = "assets/pic/dark.png";
            document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
            document.getElementById("card-front").style.border = "1px solid transparent";
            document.getElementById("card-front").style.background = "linear-gradient(145deg, rgba(120, 50, 200, 0.15), rgba(255, 120, 50, 0.1))";
            document.getElementById("card-front").style.borderImage = "linear-gradient(135deg, #7b2ffc, #ff6a00) 1";
            document.getElementById("input-code-premium").style.border = "1px solid transparent";
            document.getElementById("input-code-premium").style.background = "linear-gradient(145deg, rgba(120, 50, 200, 0.1), rgba(255, 120, 50, 0.05))";
            document.getElementById("input-code-premium").style.borderImage = "linear-gradient(135deg, #7b2ffc, #ff6a00) 1";
            document.querySelectorAll('.stats-section, .stat-card, .card-edit, .modal, .btn-modal-cancel, .btn-modal-save, .premium-modal-light').forEach(el => {
                el.style.border = '1px solid transparent';
                el.style.background = 'linear-gradient(145deg, rgba(120, 50, 200, 0.08), rgba(255, 120, 50, 0.04))';
                el.style.borderImage = 'linear-gradient(135deg, #7b2ffc, #ff6a00) 1';
            });
            document.querySelectorAll('.link, #SwitchSector').forEach(el => {
                el.style.filter = "drop-shadow(0px 0px 12px rgba(123, 47, 252, 0.3)) drop-shadow(0px 0px 12px rgba(255, 106, 0, 0.2))";
            });
            const particles = particlesDIV.querySelectorAll("div");
            particles.forEach((div) => {
                div.style.background = "linear-gradient(135deg, #7b2ffc, #ff6a00)";
            });

            root.style.setProperty('--wf-orange', 'linear-gradient(135deg, #7b2ffc, #ff6a00)');
            root.style.setProperty('--wf-orange-col', '#7b2ffc');
            root.style.setProperty('--wf-white', '#f0eaff');
            root.style.setProperty('--wf-black', '#7b2ffc');
            root.style.setProperty('--wf-dark-text', '#d4c0f0');
            root.style.setProperty('--wf-muted', '#a080c0');
            root.style.setProperty('--wf-light-gray', '#b89fd0');
            root.style.setProperty('--wf-card-bg', '#0e0a14');
            root.style.setProperty('--wf-orange-pale', 'rgba(123, 47, 252, 0.06)');
            root.style.setProperty('--wf-orange-pale-2', 'rgba(123, 47, 252, 0.03)');
            root.style.setProperty('--wf-orange-soft', 'rgba(123, 47, 252, 0.1)');
            root.style.setProperty('--wf-header-bg', 'rgba(10, 6, 18, 0.9)');
            root.style.setProperty('--wf-overlay-dark', 'rgba(6, 4, 12, 0.95)');
            root.style.setProperty('--wf-border-black', 'rgba(123, 47, 252, 0.12)');
            root.style.setProperty('--wf-danger', '#ff4477');
            root.style.setProperty('--wf-red-btn', 'rgba(255, 68, 119, 0.2)');
            root.style.setProperty('--wf-red-btn-hover', 'rgba(255, 68, 119, 0.5)');
            root.style.setProperty('--wf-green-btn', 'rgba(123, 47, 252, 0.2)');
            root.style.setProperty('--wf-green-btn-hover', 'rgba(123, 47, 252, 0.45)');
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(123, 47, 252, 0.12)');
        } else if(theme == "red" && reloadPremium() === true) {
            document.getElementById("switchTheme").src = "assets/pic/dark.png";
            document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
            document.getElementById("card-front").style.border = "1px solid transparent";
            document.getElementById("card-front").style.background = "linear-gradient(145deg, rgba(180, 0, 0, 0.12), rgba(255, 50, 50, 0.08))";
            document.getElementById("card-front").style.borderImage = "linear-gradient(135deg, #5c0000, #8b0000, #cc0000, #ff2222, #ff6666) 1";
            document.getElementById("input-code-premium").style.border = "1px solid transparent";
            document.getElementById("input-code-premium").style.background = "linear-gradient(145deg, rgba(180, 0, 0, 0.08), rgba(255, 50, 50, 0.05))";
            document.getElementById("input-code-premium").style.borderImage = "linear-gradient(135deg, #5c0000, #8b0000, #cc0000, #ff2222, #ff6666) 1";
            document.querySelectorAll('.stats-section, .stat-card, .card-edit, .modal, .btn-modal-cancel, .btn-modal-save, .premium-modal-light').forEach(el => {
                el.style.border = '1px solid transparent';
                el.style.background = 'linear-gradient(145deg, rgba(180, 0, 0, 0.06), rgba(255, 50, 50, 0.04))';
                el.style.borderImage = 'linear-gradient(135deg, #5c0000, #8b0000, #cc0000, #ff2222, #ff6666) 1';
            });
            document.querySelectorAll('.link, #SwitchSector').forEach(el => {
                el.style.filter = "drop-shadow(0px 0px 10px rgba(200, 0, 0, 0.3)) drop-shadow(0px 0px 15px rgba(255, 50, 50, 0.15))";
            });
            const particles = particlesDIV.querySelectorAll("div");
            particles.forEach((div) => {
                div.style.background = "linear-gradient(135deg, #5c0000, #8b0000, #cc0000, #ff2222, #ff6666)";
            });

            root.style.setProperty('--wf-orange', 'linear-gradient(135deg, #5c0000, #8b0000, #cc0000, #ff2222, #ff6666)');
            root.style.setProperty('--wf-orange-col', '#cc0000');
            root.style.setProperty('--wf-white', '#ffe8e8');
            root.style.setProperty('--wf-black', '#8b0000');
            root.style.setProperty('--wf-dark-text', '#e8b0b0');
            root.style.setProperty('--wf-muted', '#9e4a4a');
            root.style.setProperty('--wf-light-gray', '#be6a6a');
            root.style.setProperty('--wf-card-bg', '#160808');
            root.style.setProperty('--wf-orange-pale', 'rgba(200, 0, 0, 0.06)');
            root.style.setProperty('--wf-orange-pale-2', 'rgba(200, 0, 0, 0.03)');
            root.style.setProperty('--wf-orange-soft', 'rgba(200, 0, 0, 0.1)');
            root.style.setProperty('--wf-header-bg', 'rgba(20, 4, 4, 0.9)');
            root.style.setProperty('--wf-overlay-dark', 'rgba(14, 2, 2, 0.95)');
            root.style.setProperty('--wf-border-black', 'rgba(200, 0, 0, 0.12)');
            root.style.setProperty('--wf-danger', '#ff4477');
            root.style.setProperty('--wf-red-btn', 'rgba(255, 68, 119, 0.2)');
            root.style.setProperty('--wf-red-btn-hover', 'rgba(255, 68, 119, 0.5)');
            root.style.setProperty('--wf-green-btn', 'rgba(200, 0, 0, 0.2)');
            root.style.setProperty('--wf-green-btn-hover', 'rgba(200, 0, 0, 0.45)');
            root.style.setProperty('--wf-shadow-main', '0 8px 32px rgba(200, 0, 0, 0.1)');
        }
    }
}
ThemeSwitchFunc(localStorage.getItem("ThemeMode"));
// ThemeSwitchFunc("red");

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

function AllowThemes(theme) {
    reloadPremium().then((isPremium) => {
        if (isPremium) {
            localStorage.setItem("ThemeMode", theme);
            ThemeSwitchFunc(theme);
        } else {
            alert("Error. You dont have WordForge Premium");
            openModalLocalAccounts();
        }
    });
}