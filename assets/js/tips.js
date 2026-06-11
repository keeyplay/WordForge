const notification = document.getElementById('notification');
const closeBtn = document.getElementById('closeNotificationBtn');

//UI vars
const TipTitleUI = document.getElementById('TipTitle');
const TipTextUI = document.getElementById('TipText');

function showNotification(tiptitle, tiptext) {
    notification.classList.add('show');
    TipTitleUI.innerText = tiptitle;
    TipTextUI.innerText = tiptext;
}
if(localStorage.getItem('Profile') && cards.length === 0) {
    showNotification("Welcome to WordForge 🃏", "Learn with flashcards. Flip, memorize, repeat. Stats, streaks, and coins inside. Add your first card to start.");    
}


function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);