const notification = document.getElementById('notification');
const closeBtn = document.getElementById('closeNotificationBtn');

function showNotification() {
    // if(localStorage.getItem('Profile'))
    notification.classList.add('show');
}
// showNotification()

function hideNotification() {
    notification.classList.remove('show');
}

closeBtn.addEventListener('click', hideNotification);