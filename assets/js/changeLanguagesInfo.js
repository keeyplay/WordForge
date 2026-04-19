//change language button (front)
let UserLang = navigator.language.split('-')[0];
let switchLanCount = localStorage.getItem("language");
if(!switchLanCount) {
    if(UserLang !== "en" && UserLang !== "de" && UserLang !== "ru") {
        switchLanCount = "en";
    } else {
        switchLanCount = UserLang;
    }
}
let Translate;
let isStartButtonClicked = false; 


//get languages.json
async function loadLanguages() {
    const response = await fetch('../../languages-info.json');
    Translate = await response.json();

    // document.getElementById("change_language").innerText = switchLanCount === "en" ? "🇬🇧" : "🇷🇺";
    switchLanguageForModal(switchLanCount);

    //if(localStorage.getItem("language") === "['ru']")
}
loadLanguages();

function openModalChoose() {
    document.getElementById("modal-overlay-choose-language").style.display = "flex";
}

function switchLanguage() {
    const startButton = document.getElementById('btn_start');
    isStartButtonClicked = startButton ? startButton.classList.contains('clicked') : isStartButtonClicked;
    if(switchLanCount === "en") {
        if(isStartButtonClicked) {
              document.body.innerHTML = infoHTML;
              document.body.innerHTML += `
                    <div id="all-content">
                        <div id="new-content">
                            <div id="logo-container">
                                <div id="logo-name">
                                    <h1>WordForge</h1>
                                </div>
                            </div>
                            
                            <div id="about-section">
                                <div class="about-left">
                                    <h2>О WordForge</h2>
                                    <h3 id="textabtword"><span>WordForge</span> — это легкий интерактивный тренажер словарного запаса, созданный на чистом JavaScript. Он превращает изучение языка в увлекательную игру.<br><span>Основная идея:</span> Создавайте цифровые карточки, проверяйте себя с анимацией переворота и зарабатывайте монеты за правильные ответы. Весь прогресс сохраняется прямо в вашем браузере.<br><span>Технологии:</span> Vanilla JS, HTML5, CSS3, LocalStorage API. Никаких фреймворков, бэкенда и аккаунтов — только быстрое и приватное обучение.<br><span>Почему я создал это:</span> Мне нужен был простой игровой инструмент для моей собственной практики английского. Этот проект — мой путь публичного обучения (#buildinpublic), от первой строки кода до работающего продукта.</h3>
                                    <img src="assets/pic/logo_png_cr.png" style="max-width: 400px;" id="logoabt">
                                </div>
                                <div class="about-right">
                                    <h2>Обо мне</h2>
                                    <h3 id="textabtme">Привет, я <span>keeyplay</span>, 15-летний самоучка-разработчик из России 🇷🇺.<br><span>Моя миссия:</span> Создавать значимые цифровые продукты и проложить путь к будущей карьере в технологиях в ЕС 🇪🇺 или США 🇺🇸.<br><span>Что я делаю:</span><br>→ Пишу код публично. Документирую свой full-stack путь (JS, PHP, React) в Twitter.<br>→ Создаю и управляю Minecraft сервером и сообществом (мой первый бизнес-опыт).<br>→ Ежедневно учу английский, чтобы ворваться в мировую технологическую сцену.<br><span>Мое убеждение:</span> Постоянство создает возможности. Я сосредоточен на выпуске проектов, развитии навыков и общении с мировым сообществом разработчиков.<br><span>Давайте свяжемся в <a href="https://x.com/keeyplay">Twitter</a> или посмотрите код на <a href="https://github.com/keeyplay/WordForge">GitHub</a>.</span></h3>
                                    <img src="assets/pic/sun.png" alt="" style="width: 100px;" id="switchTheme" onclick="clickThemeSwitchBut()">
                                </div>
                            </div>
                        </div>
                        <div id="links">
                            <div id="github">
                                <a href="https://github.com/keeyplay/WordForge" target="_blank"><img src="assets/pic/github.png" style="max-width: 50px"></a>
                            </div>
                            <div id="twitter">
                                <a href="https://x.com/keeyplay" target="_blank"><img src="assets/pic/x.jpg" style="max-width: 50px"></a>
                            </div>
                            <div id="mysite">
                                <a href="https://www.donationalerts.com/r/keeyplay" target="_blank"><img src="assets/pic/website.png" style="max-width: 50px"></a>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById("change_language").innerText = "🇷🇺";
                switchLanCount = "ru";
                localStorage.setItem("language", switchLanCount);

                //click to new button
                document.getElementById("logo-name").addEventListener('click', function() {
                    this.classList.add('clicked');
                    document.getElementById("links").style.display = "none";
                    document.getElementById("info").style.display = "none";
                    setTimeout(() => {         
                        window.location.href = 'trainer.html';
                    }, 2000); 
                });
        } else {
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
        }
    } else if(switchLanCount === "ru") {
        if(isStartButtonClicked) {
                document.body.innerHTML = infoHTML;
                document.body.innerHTML += `
                    <div id="all-content">
                        <div id="new-content">
                            <div id="logo-container">
                                <div id="logo-name">
                                    <h1>WordForge</h1>
                                </div>
                            </div>
                            
                            <div id="about-section">
                                <div class="about-left">
                                    <h2>Über WordForge</h2>
                                    <h3 id="textabtword"><span>WordForge</span> ist ein leichtgewichtiger, interaktiver Vokabeltrainer, der mit reinem JavaScript entwickelt wurde. Es verwandelt das Sprachenlernen in ein lohnendes Spiel.<br><span>Kernidee:</span> Erstelle digitale Karteikarten, teste dich selbst mit einer Flip-Animation und verdiene Münzen für richtige Antworten. Dein gesamter Fortschritt wird direkt in deinem Browser gespeichert.<br><span>Technologie-Stack:</span> Vanilla JS, HTML5, CSS3, LocalStorage API. Keine Frameworks, kein Backend, keine Konten — nur schnelles, privates Lernen.<br><span>Warum ich es entwickelt habe:</span> Ich brauchte ein einfaches, spielerisches Werkzeug für meine eigene Englischpraxis. Dieses Projekt ist meine Reise des öffentlichen Lernens (#buildinpublic), von der ersten Codezeile bis zum funktionierenden Produkt.</h3>
                                    <img src="assets/pic/logo_png_cr.png" style="max-width: 400px;" id="logoabt">
                                </div>
                                <div class="about-right">
                                    <h2>Über mich</h2>
                                    <h3 id="textabtme">Hallo, ich bin <span>keeyplay</span>, ein 15-jähriger Autodidakt-Entwickler aus Russland 🇷🇺.<br><span>Meine Mission:</span> Bedeutungsvolle digitale Produkte zu entwickeln und den Weg für eine zukünftige Karriere in der Tech-Branche in der EU 🇪🇺 oder den USA 🇺🇸 zu ebnen.<br><span>Was ich mache:</span><br>→ Ich programmiere öffentlich. Ich dokumentiere meine Full-Stack-Reise (JS, PHP, React) auf Twitter.<br>→ Ich baue und verwalte einen Live-Minecraft-Server und eine Community (mein erstes Geschäftsvorhaben).<br>→ Ich lerne täglich Englisch, um in die globale Tech-Szene einzusteigen.<br><span>Meine Überzeugung:</span> Beständigkeit schafft Möglichkeiten. Ich konzentriere mich darauf, Projekte zu veröffentlichen, meine Fähigkeiten zu erweitern und mich mit der weltweiten Entwickler-Community zu vernetzen.<br><span>Lass uns auf <a href="https://x.com/keeyplay">Twitter</a> vernetzen oder schau dir den Code auf <a href="https://github.com/keeyplay/WordForge">GitHub</a> an.</span></h3>
                                    <img src="assets/pic/sun.png" alt="" style="width: 100px;" id="switchTheme" onclick="clickThemeSwitchBut()">
                                </div>
                            </div>
                        </div>
                        <div id="links">
                            <div id="github">
                                <a href="https://github.com/keeyplay/WordForge" target="_blank"><img src="assets/pic/github.png" style="max-width: 50px"></a>
                            </div>
                            <div id="twitter">
                                <a href="https://x.com/keeyplay" target="_blank"><img src="assets/pic/x.jpg" style="max-width: 50px"></a>
                            </div>
                            <div id="mysite">
                                <a href="https://www.donationalerts.com/r/keeyplay" target="_blank"><img src="assets/pic/website.png" style="max-width: 50px"></a>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById("change_language").innerText = "🇩🇪";
                switchLanCount = "de";
                localStorage.setItem("language", switchLanCount);

                //click to new button
                document.getElementById("logo-name").addEventListener('click', function() {
                    this.classList.add('clicked');
                    document.getElementById("links").style.display = "none";
                    document.getElementById("info").style.display = "none";
                    setTimeout(() => {         
                        window.location.href = 'trainer.html';
                    }, 2000); 
                });
        } else {
            document.getElementById("change_language").innerText = "🇩🇪";
            switchLanCount = "de";
            localStorage.setItem("language", switchLanCount);
            const deTranslations = Translate.de;
            for(let id in deTranslations) {
                const element = document.getElementById(id);
                if(element) {
                    element.innerText = deTranslations[id];
                }
            }

        }
    } else if(switchLanCount === "de") {
        if(isStartButtonClicked) {
                document.body.innerHTML = infoHTML;
                document.body.innerHTML += `
                    <div id="all-content">
                        <div id="new-content">
                            <div id="logo-container">
                                <div id="logo-name">
                                    <h1>WordForge</h1>
                                </div>
                            </div>
                            
                            <div id="about-section">
                                <div class="about-left">
                                    <h2>About WordForge</h2>
                                    <h3 id="textabtword"><span>WordForge</span> is a lightweight, interactive vocabulary trainer built with pure JavaScript. It turns language learning into a rewarding game.<br><span>Core Idea:</span> Create digital flashcards, test yourself with a flip animation, and earn coins for correct answers. Your entire progress is saved right in your browser.<br><span>Tech Stack:</span> Vanilla JS, HTML5, CSS3, LocalStorage API. No frameworks, no backend, no accounts — just fast, private learning.<br><span>Why I Built It:</span> I needed a simple, gamified tool for my own English practice. This project is my journey of learning in public (#buildinpublic), from the first line of code to a working product.</h3>
                                    <img src="assets/pic/logo_png_cr.png" style="max-width: 400px;" id="logoabt">
                                </div>
                                <div class="about-right">
                                    <h2>About me</h2>
                                    <h3 id="textabtme">Hi, I'm <span>keeyplay</span>, a 15-year-old self-taught developer from Russia 🇷🇺.<br><span>My Mission:</span> To build impactful digital products and carve a path for a future tech career in the EU 🇪🇺 or US 🇺🇸.<br><span>What I Do:</span><br>→ Code in public. I document my full-stack journey (JS, PHP, React) on Twitter.<br>→ Build & Manage a live Minecraft server and community (my first business venture).<br>→ Learn English daily to break into the global tech scene.<br><span>My Belief:</span> Consistency creates opportunity. I focus on shipping projects, growing my skills, and connecting with the worldwide dev community.<br><span>Let's connect on <a href="https://x.com/keeyplay">Twitter</a> or check out the code on <a href="https://github.com/keeyplay/WordForge">GitHub</a>.</span></h3>
                                    <img src="assets/pic/sun.png" alt="" style="width: 100px;" id="switchTheme" onclick="clickThemeSwitchBut()">
                                </div>
                            </div>
                        </div>
                        <div id="links">
                            <div id="github">
                                <a href="https://github.com/keeyplay/WordForge" target="_blank"><img src="assets/pic/github.png" style="max-width: 50px"></a>
                            </div>
                            <div id="twitter">
                                <a href="https://x.com/keeyplay" target="_blank"><img src="assets/pic/x.jpg" style="max-width: 50px"></a>
                            </div>
                            <div id="mysite">
                                <a href="https://www.donationalerts.com/r/keeyplay" target="_blank"><img src="assets/pic/website.png" style="max-width: 50px"></a>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById("change_language").innerText = "🇬🇧";
                switchLanCount = "en";
                localStorage.setItem("language", switchLanCount);

                //click to new button
                document.getElementById("logo-name").addEventListener('click', function() {
                    this.classList.add('clicked');
                    document.getElementById("links").style.display = "none";
                    document.getElementById("info").style.display = "none";
                    setTimeout(() => {         
                        window.location.href = 'trainer.html';
                    }, 2000); 
                });
        } else {
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
    } else if(switchLanCountLS === "de") {
        const deTranslations = Translate.de;
        for(let id in deTranslations) {
            const element = document.getElementById(id);
            if(element) {
                element.innerText = deTranslations[id];
            }
        }
    }
};



