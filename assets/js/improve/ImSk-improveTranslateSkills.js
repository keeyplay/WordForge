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
    
    ans1.innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
    ans2.innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
    ans3.innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
    ans4.innerText = words_itk[Math.floor(Math.random() * words_itk.length)].translation
}