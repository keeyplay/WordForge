const UIcoin = document.getElementById('coin');
const UIcoinAmount = document.getElementById('amountCoins');

//set variable in localstorage if coins didnt exist
function setCoins() {
    if(!localStorage.getItem('coins')) {
        localStorage.setItem('coins', 0);
    }
}

setCoins()

function addCoins(amount) {
    UIcoin.style.display = "flex";
    localStorage.setItem('coins', Number(localStorage.getItem('coins')) + amount);
    UIcoin.style.bottom = Math.floor(Math.random() * (80 - 20 + 1)) + 20 + "%";
    UIcoin.style.right = Math.floor(Math.random() * (80 - 20 + 1)) + 20 + "%";
    UIcoin.style.animation = 'coinShow 1s';
    UIcoinAmount.innerText = "+" + amount;

    setTimeout(function() {
        UIcoin.style.display = "none";
        UIcoin.style.animation = '';
    }, 1000)

    return "+" + amount + " coins";
}