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
if(localStorage.getItem('Profile') && JSON.parse(localStorage.getItem(localStorage.getItem('Profile'))).languageCards.length === 0) {
    showNotification("Welcome to WordForge 🃏", "Learn with flashcards. Flip, memorize, repeat. Stats, streaks, and coins inside. Add your first card to start.");    
}

function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);