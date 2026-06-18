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
}

function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);