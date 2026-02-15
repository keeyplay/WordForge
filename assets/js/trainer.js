let cards = JSON.parse(localStorage.getItem('languageCards')) || [];  //parse all cards // if hasnt create empty array
let cardsAdd = JSON.parse(localStorage.getItem('languageCards')) || [];
let swipping = false;
let streaks = JSON.parse(localStorage.getItem('streaks')) || {
    streakCount: 0,
    lastVisitDate: null,
    streakClaimedToday: false
};

let cardWord = document.getElementById("card-word"); //front card
let countCards = document.getElementById("stat-cards"); //count of cards

// streaks load -------------------------------------------------------------
//get streaks
function saveStreaks() {
    localStorage.setItem('streaks', JSON.stringify(streaks));
}

function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // for example: 2026-10-27
}

function getYesterdayDateString() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const day = String(yesterday.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateStreak() {
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    // streak already couted
    if (streaks.lastVisitDate === today && streaks.streakClaimedToday) {
        renderStreak();
        return;
    }

    // first time
    if (streaks.lastVisitDate !== today) {
        
        // user was here yesterday
        if (streaks.lastVisitDate === yesterday) {
            streaks.streakCount += 1;
        } 
        // streak start or lose streak
        else {
            streaks.streakCount = 1;
        }

        // update data
        streaks.lastVisitDate = today;
        streaks.streakClaimedToday = true;
        saveStreaks();
        renderStreak();
    } 

    else if (streaks.lastVisitDate === today && !streaks.streakClaimedToday) {
        if (streaks.lastVisitDate === yesterday) {
            streaks.streakCount += 1;
        } else {
            streaks.streakCount = 1;
        }
        streaks.streakClaimedToday = true;
        saveStreaks();
        renderStreak();
    }
}

function renderStreak() {
    document.getElementById("stat-streak").innerText = "🔥 " + streaks.streakCount;
}
updateStreak()

//render cards ---------------------------------------------------------------------

function renderCards() {
    if(cards.length === 0 && cardsAdd.length === 0) {
        document.getElementById("cards-stack").style.display = "none";
        document.getElementById("swipe-actions").style.display = "none";
        document.getElementById("empty-state").style.display = "block";
    }
    if(cards.length !== 0 && cardsAdd.length !== 0) {
        document.getElementById("empty-state").style.display = "none";
        cardWord.textContent = cardsAdd[cardsAdd.length-1].word; //show last card
        countCards.textContent = cards.length + " cards";
    }
    if(cardsAdd.length === 0 && cards.length !== 0) {
        document.getElementById("empty-state").style.display = "none";
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

        cardsAdd.push({
            word: newWord,
            translation: newTranslate,
            // fliped: false //if true again try to show this card latter
        });

        localStorage.setItem('languageCards', JSON.stringify(cards)); //update in localstorage
        renderCards(); //update card in front

        document.getElementById("modal-overlay").style.display = "none"; //close modal window
    }
    document.getElementById("input-word").value = '';
    document.getElementById("input-translation").value = '';
});

//arrows navigarions
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
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
  } else if (event.key === 'ArrowRight') {
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
  }
});





//other buttons
//--------------------------------------------------

//open modal add
document.getElementById("btn-create-card").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "flex";
});
//close modal add
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

//------------------------modal edit---------------------------------
//open modal edit
document.getElementById("btn-edit-card").addEventListener('click', openModalEdit);
function openModalEdit() {
    document.getElementById("modal-overlay-edit").style.display = "flex";
    document.getElementById("all-cards-county").innerText = "All Cards (" + cards.length + ")";
    
    for(let el = 0; el < cards.length; el++) {
        document.getElementById("cards-edit").innerHTML += `
            <div class='card-edit'>
                <h2>${el+1}. ${cards[el].word} - ${cards[el].translation}</h2>
                <h2 class="btn-delete-card" id="btn-delete-card/${el}">Delete</h2>
            </div>
        `;
    }

    //delete card
    document.querySelectorAll('.btn-delete-card').forEach(button => {
        button.addEventListener('click', function() {
            let cardDelete = this.id;
            let index = Number(cardDelete.split("/")[1]);
            cards.splice(index, 1);
            cardsAdd.splice(index, 1);
            localStorage.setItem("languageCards", JSON.stringify(cards));
            renderCards();

            document.getElementById("cards-edit").innerHTML = "";
            openModalEdit();
        });
    });
};

//close modal edit
document.getElementById("btn-modal-cancel-edit").addEventListener('click', function() {
    document.getElementById("modal-overlay-edit").style.display = "none"; 
    document.getElementById("cards-edit").innerHTML = "";
});

//delete all cards
document.getElementById("btn-modal-delete-all-edit").addEventListener('click', function() {
    let sure = confirm("Are you sure you want to delete your progress?");
    if(sure === true) { localStorage.setItem("languageCards", JSON.stringify([])); renderCards(); location.reload(); }    
});