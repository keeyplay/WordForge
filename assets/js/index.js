document.getElementById('btn_start').addEventListener('click', function() {
    this.classList.add('clicked');

    setTimeout(() => {     
        const infoElement = document.getElementById('info');
        const infoHTML = infoElement.outerHTML;
        
        document.body.innerHTML = '';
        document.body.style.background = "white";
        
        document.body.innerHTML = infoHTML;
        // document.body.style.display = "block";
        let newContent;
        if(localStorage.getItem("language") === "en") {
            newContent = `
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
        } else {
            newContent = `
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
        }
        
        document.body.style.height = "100vh";
        // getElementById("logo-name").classList.add('ani');
        document.body.innerHTML += newContent; 

        //info up
        // document.getElementById("info").style.animationDuration = "0.5s";
        // document.getElementById("info").style.justifyContent = "space-between";
        // document.getElementById("infoup").innerText = "WordForge";

        document.getElementById("logo-name").addEventListener('click', function() {
            this.classList.add('clicked');
            document.getElementById("links").style.display = "none";
            document.getElementById("info").style.display = "none";
            setTimeout(() => {         
                window.location.href = 'trainer.html';
            }, 2000); 
        });
    }, 1500); 
});