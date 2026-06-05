//change language button (front)
let UserLang = navigator.language.split('-')[0];
let switchLanCount = localStorage.getItem("language");
if(!switchLanCount) {
    if(UserLang !== "en" && UserLang !== "de" && UserLang !== "ru" && UserLang !== "pl" && UserLang !== "sr") {
        switchLanCount = "en";
    } else {
        switchLanCount = UserLang;
    }
}
let Translate;

//get languages.json
async function loadLanguages() {
    const response = await fetch('../../languages-trainer.json');
    Translate = await response.json();

    // document.getElementById("change_language").innerText = switchLanCount === "en" ? "🇬🇧" : "🇷🇺";
    switchLanguageForModal(switchLanCount);

    //if(localStorage.getItem("language") === "['ru']")
}
loadLanguages();

function openModalChoose() {
    document.getElementById("modal-overlay-choose-language").style.display = "flex";

    document.getElementById("modal-overlay-choose-language").addEventListener('click', function() {
        document.getElementById("modal-overlay-choose-language").style.display = "none";
    });
}

function switchLanguageForModal(switchLanCountLS = "en") {
    if(!Translate) return;
    localStorage.setItem('language', switchLanCountLS);
    for(let key in Translate) {
        if (document.getElementById(key)) {
            document.getElementById(key).innerText = Translate[key][switchLanCountLS];
        }  
    }
    document.getElementById("modal-overlay-choose-language").style.display = "none";
};



