let words_itk = localStorage.getItem(localStorage.getItem('Profile')).languageCards

const word_d = document.getElementById('word');

function reloadWord() {
    word_d.innerText = words_itk[Math.floor(Math.random() * words_itk.length)]
    // WIP ...
}