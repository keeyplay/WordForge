const notification = document.getElementById('notification');
const closeBtn = document.getElementById('closeNotificationBtn');

//UI vars
const TipTitleUI = document.getElementById('TipTitle');
const TipTextUI = document.getElementById('TipText');
const notificationIcon = document.getElementById('notification-icon');
const notificationBox = document.getElementById('notification-box');

let tips;

async function loadtips() {
    const response = await fetch('../../tips.json');
    tips = await response.json();
}
loadtips();

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
    const lang = localStorage.getItem("language") || "en";

    showNotification(
        tips["welcome-notification"][lang]["title"],
        tips["welcome-notification"][lang]["text"]
    );
}

function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);