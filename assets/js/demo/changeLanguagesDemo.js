const buttLang = document.getElementById('butt-lang');
const dropdown = document.getElementById('dropdown-lang');
const nav = document.getElementById('nav');

function openDropdown() {
    dropdown.classList.add('visible');
}

document.addEventListener('click', function(event) {
    const isOpen = dropdown.classList.contains('visible');
    const isClickInside = dropdown.contains(event.target);
    const isClickOnButton = buttLang.contains(event.target); 
    
    if (isOpen && !isClickInside && !isClickOnButton) {
        closeDropdown();
    }
});


function closeDropdown() {
    dropdown.classList.remove('visible');
}

function Dropdown() {
    if(!dropdown.classList.contains('visible')) openDropdown();
    else closeDropdown();
}

buttLang.addEventListener('click', Dropdown);

//translate -------------------------------------------------
let UserLang = navigator.language.split('-')[0];
let switchLanCount = localStorage.getItem("language");
if(!switchLanCount) {
    if(UserLang !== "en" && UserLang !== "de" && UserLang !== "ru" && UserLang !== "pl" && UserLang !== "sr" && UserLang !== "ja") {
        switchLanCount = "en";
    } else {
        switchLanCount = UserLang;
    }
}
let Translate;

//get languages.json
async function loadLanguages() {
    const response = await fetch('../../languages-demo.json');
    Translate = await response.json();

    // document.getElementById("change_language").innerText = switchLanCount === "en" ? "🇬🇧" : "🇷🇺";
    switchLanguageForModal(switchLanCount);

    //if(localStorage.getItem("language") === "['ru']")
}
loadLanguages();

function switchLanguageForModal(switchLan) {
    for(const [key, value] of Object.entries(Translate)) {
        document.getElementById(key).innerText = value[switchLan];
    }
    localStorage.setItem("language", switchLan);
    closeDropdown();
}