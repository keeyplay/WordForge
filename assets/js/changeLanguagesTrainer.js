//change language button (front)
let switchLanCount = localStorage.getItem("language") || "en";
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

function switchLanguage() {
    if(switchLanCount === "en") {
        document.getElementById("change_language").innerText = "🇷🇺";
        switchLanCount = "ru";
        localStorage.setItem("language", switchLanCount);
        const ruTranslations = Translate.ru;
        for(let id in ruTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = ruTranslations[id];
            }
        }
        // localStorage.setItem('language', "ru");
    } else if(switchLanCount === "ru") {
        document.getElementById("change_language").innerText = "🇬🇧";
        switchLanCount = "en";
        localStorage.setItem("language", switchLanCount);
        const enTranslations = Translate.en;
        for(let id in enTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = enTranslations[id];
            }
        }
    }
};

function switchLanguageForModal(switchLanCountLS = "en") {
    if(!Translate) return;
    if(switchLanCountLS === "en") {
        const enTranslations = Translate.en;
        for(let id in enTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = enTranslations[id];
            }
        }
    } else if(switchLanCountLS === "ru") {
        const ruTranslations = Translate.ru;
        for(let id in ruTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = ruTranslations[id];
            }
        }
    }
};



