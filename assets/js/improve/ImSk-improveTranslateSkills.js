let words_itk = localStorage.getItem(localStorage.getItem('Profile')).languageCards

const tesstImTrSk_modal = document.getElementById('tesstImTrSk');
const word_d = document.getElementById('word');

const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');

function reloadWord() {
    if(words_itk.length <= 4) {
        alert("You can't improve your skills. Please, add 4 cards at least.");
    }
    let num = Math.floor(Math.random() * words_itk.length)

    tesstImTrSk_modal.style.display = "flex";
    
    word_d.innerText = words_itk[num].word;
    for(let i = 0; i++; i < 4) {
        let [random1, random2, random3, random4] = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        const buttons = [ans1, ans2, ans3, ans4];
        buttons[random1].innerText = words_itk[num].translation
        buttons[random2].innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
        buttons[random3].innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
        buttons[random4].innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
    }
}