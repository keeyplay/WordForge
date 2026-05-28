function setCoins() {
    if(!localStorage.getItem('coins')) {
        localStorage.setItem('coins', 0);
    }
}

setCoins()

function addCoins(amount) {
    localStorage.setItem('coins', localStorage.getItem('coins') + amount);
}