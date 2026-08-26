const notification = document.getElementById('notification');
const closeBtn = document.getElementById('closeNotificationBtn');

//UI vars
const TipTitleUI = document.getElementById('TipTitle');
const TipTextUI = document.getElementById('TipText');
const notificationIcon = document.getElementById('notification-icon');
const notificationBox = document.getElementById('notification-box');

function showNotification(tiptitle, tiptext, type = "not") {
    if(type === "not") { //not = notification
        notificationIcon.innerText = "ℹ️"
        notificationBox.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    } else if(type = "ach") { //ach = achivment
        notificationIcon.innerText = "🏆";
        notificationBox.style.border = "5px solid yellow";
    }
    notification.classList.add('show');
    TipTitleUI.innerText = tiptitle;
    TipTextUI.innerText = tiptext;
}
if(localStorage.getItem('Profile') && !JSON.parse(localStorage.getItem(localStorage.getItem('Profile'))).languageCards) {
    if(localStorage.getItem("language") === "en") showNotification("Welcome to WordForge 🃏", "Learn with flashcards. Flip, memorize, repeat. Stats, streaks, and coins inside. Add your first card to start.");

    if(localStorage.getItem("language") === "ru") showNotification("Добро пожаловать в WordForge 🃏", "Учите слова с карточками. Переворачивайте, запоминайте, повторяйте. Статистика, серии и монетки внутри. Добавьте первую карточку, чтобы начать.");

    if(localStorage.getItem("language") === "de") showNotification("Willkommen bei WordForge 🃏", "Lerne mit Karteikarten. Drehe um, merke dir, wiederhole. Statistiken, Serien und Münzen inklusive. Füge deine erste Karte hinzu, um zu starten.");

    if(localStorage.getItem("language") === "pl") showNotification("Witaj w WordForge 🃏", "Ucz się z fiszkami. Odwracaj, zapamiętuj, powtarzaj. Statystyki, serie i monety w środku. Dodaj swoją pierwszą kartę, aby rozpocząć.");

    if(localStorage.getItem("language") === "sr") showNotification("Dobrodošli u WordForge 🃏", "Učite sa flashcards. Okrećite, zapamtite, ponavljajte. Statistika, nizovi i novčići unutra. Dodajte svoju prvu karticu da počnete.");

    if(localStorage.getItem("language") === "ja") showNotification("WordForge 🃏へようこそ", "フラッシュカードで学びましょう。めくって、覚えて、繰り返す。統計、シーケンス、コインも搭載。最初のカードを追加して始めてください。");

    if(localStorage.getItem("language") === "ka") showNotification("მოგესალმებით WordForge 🃏-ში", "ისწავლეთ ფლეშ-ბარათებით. გადაატრიალეთ, დაიმახსოვრეთ, გაიმეორეთ. სტატისტიკა, სერიები და მონეტები შიგნით. დაამატეთ პირველი ბარათი დასაწყებად.");

    if(localStorage.getItem("language") === "el") showNotification("Καλώς ήρθατε στο WordForge 🃏", "Μάθετε με κάρτες μνήμης. Γυρίστε, απομνημονεύστε, επαναλάβετε. Στατιστικά, σερί και νομίσματα μέσα. Προσθέστε την πρώτη σας κάρτα για να ξεκινήσετε.");

    if(localStorage.getItem("language") === "es") showNotification("Bienvenido a WordForge 🃏", "Aprende con tarjetas interactivas. Voltea, memoriza, repite. Estadísticas, rachas y monedas dentro. Añade tu primera tarjeta para empezar.");

    if(localStorage.getItem("language") === "pt") showNotification("Bem-vindo ao WordForge 🃏", "Aprenda com flashcards. Vire, memorize, repita. Estatísticas, sequências e moedas dentro. Adicione sua primeira carta para começar.");

    if(localStorage.getItem("language") === "fi") showNotification("Tervetuloa WordForgeen 🃏", "Opi muistikorttien avulla. Käännä, muista, toista. Tilastot, putket ja kolikot sisällä. Lisää ensimmäinen korttisi aloittaaksesi.");

    if(localStorage.getItem("language") === "zh") showNotification("欢迎来到WordForge 🃏", "使用闪卡学习。翻转、记忆、重复。内置统计、连续天数和硬币。添加您的第一张卡片开始学习。");
}

function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);