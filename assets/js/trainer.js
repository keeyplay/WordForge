let cards = JSON.parse(localStorage.getItem('languageCards')) || [];  //parse all cards // if hasnt create empty array

let cardWord = document.getElementById("card-word"); //front card
let countCards = document.getElementById("stat-cards"); //count of cards

function renderCards() {
    cardWord.textContent = cards[cards.length-1].word; //show last card
    countCards.textContent = cards.length + " cards";
};
renderCards()

//pressed button of save
document.getElementById("btn-modal-save").addEventListener('click', function() {
    let newWord = document.getElementById("input-word").value; 
    let newTranslate = document.getElementById("input-translation").value;
    
    //push cards
    cards.push({
        word: newWord,
        translation: newTranslate,
        fliped: false //if true again try to show this card latter
    });

    localStorage.setItem('languageCards', JSON.stringify(cards)); //update in localstorage
    renderCards(); //update card in front

    document.getElementById("modal-overlay").style.display = "none"; //close modal window
});




//other buttons
//--------------------------------------------------

//open modal
document.getElementById("btn-create-card").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "block";
});
//close modal
document.getElementById("btn-modal-cancel").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "none"; 
});