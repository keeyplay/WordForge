let cards = JSON.parse(localStorage.getItem('languageCards')) || [];  //parse all cards // if hasnt create empty array
let cardsAdd = JSON.parse(localStorage.getItem('languageCards')) || [];
let swipping = false;

let cardWord = document.getElementById("card-word"); //front card
let countCards = document.getElementById("stat-cards"); //count of cards

function renderCards() {
    if(cards.length === 0) {
        document.getElementById("cards-stack").style.display = "none";
        document.getElementById("swipe-actions").style.display = "none";
        document.getElementById("empty-state").style.display = "block";
    }
    if(cards.length !== 0 && cardsAdd.length !== 0) {
        cardWord.textContent = cardsAdd[cardsAdd.length-1].word; //show last card
        countCards.textContent = cards.length + " cards";
    }
    if(cardsAdd.length === 0 && cards.length !== 0) {
        document.getElementById("cards-stack").style.display = "none";
        document.getElementById("swipe-actions").style.display = "none";
        document.getElementById("done-state").style.display = "block";
    }
};
renderCards()

//dont know
document.getElementById("btn-dont-know").addEventListener('click', function() {
    if(swipping === false) {
        swipping = true;
        // cardsAdd[cardsAdd.length-1].fliped = true;
        cardWord.textContent = cardsAdd[cardsAdd.length-1].translation;
        setTimeout(() => {
            document.getElementById("card-inner").classList.add("card-swipe-left");
            setTimeout(() => {
                //cardsAdd.pop();
                swipping = false;
                renderCards();
                document.getElementById("card-inner").classList.remove("card-swipe-left");
            }, 400);
        }, 1500);
    }
});

// know
document.getElementById("btn-know").addEventListener('click', function() {
    if(swipping === false) {
        swipping = true;
        cardWord.textContent = cardsAdd[cardsAdd.length-1].translation;
            document.getElementById("card-inner").classList.add("card-swipe-right");
        setTimeout(() => {
            swipping = false;
            cardsAdd.pop();
            renderCards();
            document.getElementById("card-inner").classList.remove("card-swipe-right");
        }, 500);
    }
    
});

//pressed button of save
document.getElementById("btn-modal-save").addEventListener('click', function() {
    let word = document.getElementById("input-word").value
    let trans = document.getElementById("input-translation").value 
    let letAdd = true;

    if(word.trim().length === 0 || trans.trim().length === 0) { alert("Please fill out all fields"); letAdd = false; }
    if(word.length >= 15 || trans.length >= 15) { alert("Maximum 15 characters"); letAdd = false; }

    if(letAdd === true) {
        let newWord = document.getElementById("input-word").value; 
        let newTranslate = document.getElementById("input-translation").value;
        
        //push cards
        cards.push({
            word: newWord,
            translation: newTranslate,
            // fliped: false //if true again try to show this card latter
        });

        localStorage.setItem('languageCards', JSON.stringify(cards)); //update in localstorage
        renderCards(); //update card in front

        document.getElementById("modal-overlay").style.display = "none"; //close modal window
    }
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
//start again 
document.getElementById("btn-start-again").addEventListener('click', function() {
    cardsAdd = JSON.parse(localStorage.getItem('languageCards')) || [];
    renderCards();
    document.getElementById("cards-stack").style.display = "flex";
    document.getElementById("swipe-actions").style.display = "flex";
    document.getElementById("done-state").style.display = "none";
});