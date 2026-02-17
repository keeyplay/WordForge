//change language button (front)
let switchLanCount = 0;
let Translate;

//get languages.json
async function loadLanguages() {
    const response = await fetch('../../languages.json');
    Translate = await response.json();

    //if(localStorage.getItem("language") === "['ru']")
}
loadLanguages();
document.getElementById("change_language").addEventListener('click', function() {
    if(switchLanCount === 0) {
        document.getElementById("change_language").innerText = "RU";
        switchLanCount++;
        const ruTranslations = Translate.ru;
        for(let id in ruTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = ruTranslations[id];
            }
        }
        // localStorage.setItem('language', "ru");
    } else if(switchLanCount === 1) {
        document.getElementById("change_language").innerText = "EN";
        switchLanCount = 0;
        const enTranslations = Translate.en;
        for(let id in enTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = enTranslations[id];
            }
        }
    }
});



