//change language button (front)
let switchLanCount = 0;
document.getElementById("change_language").addEventListener('click', function() {
    if(switchLanCount === 0) {
        document.getElementById("change_language").innerText = "RU";
        switchLanCount++;
    } else if(switchLanCount === 1) {
        document.getElementById("change_language").innerText = "EN";
        switchLanCount = 0;
    }
});