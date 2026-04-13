let profile = localStorage.getItem('Profile') || "";
let profileData = profile ? (() => { try { return JSON.parse(localStorage.getItem(profile)) || {}; } catch { return {}; } })() : {};
let cards = profileData.languageCards || [];
let cardsAdd = [...cards];
let swipping = false;
let randomCount = Math.floor(Math.random() * cardsAdd.length);
let streaks = profileData.streaks || {
    streakCount: 0,
    lastVisitDate: null,
    streakClaimedToday: false,
    CongToday: false
};

if(profileData.streaks) {
    if(profileData.streaks.length === 3) {
        profileData.streaks.CongToday = false;
    }
}

let cardWord = document.getElementById("card-word"); //front card
let countCards = document.getElementById("stat-cards"); //count of cards

if(localStorage.length === 0) {
    document.getElementById("modalAddAccounts").style.display = "flex";
    document.getElementById("accountsAdd-panel-close").style.display = "none";
}

if(HowManyProfiles() === 0) {
    document.getElementById("modalAddAccounts").style.display = "flex";
    document.getElementById("accountsAdd-panel-close").style.display = "none";
}

//update random count func
function updateRandomCount() {
    if (cardsAdd.length > 0) {
        randomCount = Math.floor(Math.random() * cardsAdd.length);
    }
}

// streaks load -------------------------------------------------------------
//get streaks
function saveStreaks() {
    profileData.streaks = streaks;
    if(profile !== "") {
        localStorage.setItem(profile, JSON.stringify(profileData));
    }
}

function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // from 1 to 12 month
    const day = String(today.getDate()).padStart(2, '0'); // from 1 to 30 day
    return `${year}-${month}-${day}`; // for example: 2026-10-27
}

function getYesterdayDateString() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // from 1 to 12 month
    const day = String(yesterday.getDate()).padStart(2, '0'); // from 1 to 30 day
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
        profileData.streaks = streaks; 
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
        profileData.streaks = streaks; 
        saveStreaks();
        renderStreak();
    }
}

const streakMessages = [
  "New streak unlocked! 🚀 Consistency over intensity. Every single day counts.",
  "Streak continues! 🔥 Not fast, but steady. That's how you win.",
  "Another day, another step. 🐢 Your streak is growing. Keep going.",
  "You showed up again. 💪 That's the whole secret. Streak alive.",
  "No zero days. ✅ Streak preserved. Tomorrow is the next battle.",
  "Brick by brick. 🧱 Your streak is becoming a wall. Don't stop.",
  "1 day closer to the goal. 🎯 Streak intact. Respect.",
  "Not every day is a leap. But every day counts. 🦾 Streak updated.",
  "You didn't quit today. 🔥 That's the win. Streak lives.",
  "Small step, big streak. 🐢 Consistency > talent. Every time.",
  "Streak extended. 📈 Not perfect, but present. That's enough.",
  "Another day in the books. 📚 Streak = proof you can trust yourself.",
  "The streak is a mirror. 🪞 It shows who you really are. Today: strong.",
  "You could've skipped. You didn't. 👊 Streak honored.",
  "One more day. One more commit. One more step toward the life you want. 🚀 Streak secured."
];

function renderStreak() {
    document.getElementById("stat-streak").innerText = "🔥 " + streaks.streakCount;
    if(streaks.streakCount % 5 === 0 && streaks.streakCount != 0) {
        if(!streaks.CongToday) {
            document.getElementById("modal-overlay-streak").style.display = "flex";
            document.getElementById("message-streak").innerText = streakMessages[Math.floor(Math.random() * 15)];
            document.getElementById("all-streaks-county").innerText = "Your new streak - " + profileData.streaks.streakCount;
            streaks.CongToday = true;
            localStorage.setItem(profile, JSON.stringify(profileData));
        } 
    } else {
        streaks.CongToday = false;
        localStorage.setItem(profile, JSON.stringify(profileData));
    }
}
updateStreak()

//render cards ---------------------------------------------------------------------

function renderCards() {
    if(cards.length === 0 && cardsAdd.length === 0) {
        document.getElementById("cards-stack").style.display = "none";
        document.getElementById("swipe-actions").style.display = "none";
        document.getElementById("empty-state").style.display = "block";
        document.getElementById("done-state").style.display = "none";
    }
    else if(cards.length !== 0 && cardsAdd.length !== 0) {
        document.getElementById("empty-state").style.display = "none";
        document.getElementById("done-state").style.display = "none";
        document.getElementById("cards-stack").style.display = "flex";
        document.getElementById("swipe-actions").style.display = "flex";

        if (randomCount >= cardsAdd.length) {
            updateRandomCount();
        }

        if(cardsAdd.length > 0) {
            cardWord.textContent = cardsAdd[randomCount].word;
        }
        countCards.textContent = cards.length + " cards";
    }
    else if(cardsAdd.length === 0 && cards.length !== 0) {
        cardWord = false;
        document.getElementById("empty-state").style.display = "none";
        document.getElementById("cards-stack").style.display = "none";
        document.getElementById("swipe-actions").style.display = "none";
        document.getElementById("done-state").style.display = "block";
    }
}
renderCards()

//dont know
document.getElementById("btn-dont-know").addEventListener('click', function() {
    ClickDontKnown();
});

function ClickDontKnown() {
    if(cardWord) {
        if(swipping === false) {
            swipping = true;
            // cardsAdd[cardsAdd.length-1].fliped = true;
            cardWord.textContent = cardsAdd[randomCount].translation;
            setTimeout(() => {
                document.getElementById("card-inner").classList.add("card-swipe-left");
                setTimeout(() => {
                    swipping = false;
                    updateRandomCount();
                    renderCards();
                    document.getElementById("card-inner").classList.remove("card-swipe-left");
                }, 400);
            }, 1500);
        }
    }
}

// know
document.getElementById("btn-know").addEventListener('click', function() {
    ClickKnown()
});

function ClickKnown() {
    if(cardWord) {
        if(swipping === false) {
            swipping = true;
            document.getElementById("card-inner").classList.add("card-swipe-right");

            //Cards know count 
            cards[randomCount].knowCount++;
            profileData.languageCards = cards;
            localStorage.setItem(profile, JSON.stringify(profileData));

            setTimeout(() => {
                swipping = false;
                cardsAdd.splice(randomCount, 1);
                profileData.languageCards = cards;
                localStorage.setItem(profile, JSON.stringify(profileData));
                updateRandomCount();
                renderCards();
                document.getElementById("card-inner").classList.remove("card-swipe-right");
            }, 500);
        }
    }
}

//pressed button of save
document.getElementById("btn-modal-save").addEventListener('click', function() {
    document.body.style.overflow = '';
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
            date: getTodayDateString(),
            knowCount: 0
            // fliped: false //if true again try to show this card latter
        });

        cardsAdd.push({
            word: newWord,
            translation: newTranslate,
            date: getTodayDateString(),
            knowCount: 0
            // fliped: false //if true again try to show this card latter
        });

        if(cards.length === 1 && cardsAdd.length === 1) {
            document.getElementById("cards-stack").style.display = "flex";
            document.getElementById("swipe-actions").style.display = "flex";
        }

        profileData.languageCards = cards;
        localStorage.setItem(profile, JSON.stringify(profileData)); //update in localstorage 
        updateRandomCount(); // update random count
        renderCards(); //update card in front

        document.getElementById("modal-overlay").style.display = "none"; //close modal window
    }
    document.getElementById("input-word").value = '';
    document.getElementById("input-translation").value = '';
});

//arrows navigarions
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    if(cardWord) {
        if(swipping === false) {
            swipping = true;
            // cardsAdd[cardsAdd.length-1].fliped = true;
            cardWord.textContent = cardsAdd[randomCount].translation;
            setTimeout(() => {
                document.getElementById("card-inner").classList.add("card-swipe-left");
                setTimeout(() => {
                    //cardsAdd.pop();
                    swipping = false;
                    updateRandomCount();
                    renderCards();
                    document.getElementById("card-inner").classList.remove("card-swipe-left");
                }, 400);
            }, 1500);
        }
    } else alert("ss")
  } else if (event.key === 'ArrowRight') {
    if(cardWord) {
        if(swipping === false) {
            swipping = true;
            cardWord.textContent = cardsAdd[randomCount].translation;
                document.getElementById("card-inner").classList.add("card-swipe-right");
            setTimeout(() => {
                swipping = false;
                cardsAdd.splice(randomCount, 1);
                updateRandomCount();
                renderCards();
                document.getElementById("card-inner").classList.remove("card-swipe-right");
            }, 500);
        }
    } 
  }
});



//other buttons
//--------------------------------------------------

//open modal add
document.getElementById("btn-create-card").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "flex";
    document.body.style.overflow = 'hidden';
});
//close modal add
document.getElementById("btn-modal-cancel").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "none"; 
    document.body.style.overflow = '';
});
//start again 
document.getElementById("btn-start-again").addEventListener('click', function() {
    cardWord = document.getElementById("card-word");
    cardsAdd = [...cards];
    localStorage.setItem(profile, JSON.stringify(profileData));
    updateRandomCount();
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
    document.body.style.overflow = 'hidden';
    
    for(let el = 0; el < cards.length; el++) {
        document.getElementById("cards-edit").innerHTML += `
            <div class='card-edit'>
                <h2 class="text-of-card">${el+1}. ${cards[el].word} - ${cards[el].translation}</h2>
                <h2 class="btn-delete-card" id="btn-delete-card/${el}">Delete</h2>
            </div>
        `;
    }
    switchLanguageForModal(localStorage.getItem("language"));
    ThemeSwitchFunc();

    //delete card
    document.querySelectorAll('.btn-delete-card').forEach(button => {
        button.addEventListener('click', function() {
            let cardDelete = this.id;
            let index = Number(cardDelete.split("/")[1]);
            cards.splice(index, 1);
            cardsAdd.splice(index, 1);
            profileData.languageCards = cards;
            localStorage.setItem(profile, JSON.stringify(profileData));
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
    document.body.style.overflow = '';
});

//delete all cards
document.getElementById("btn-modal-delete-all-edit").addEventListener('click', function() {
    if(sure === true) { 
        cards = [];
        cardsAdd = [];
        profileData.languageCards = cards;
        localStorage.setItem(profile, JSON.stringify(profileData)); 
        renderCards(); 
        location.reload(); 
    };
});

//swipe system 
let touchStartX = 0;
let touchEndX = 0;

const minDistance = 50;

const handleSwipe = () => {
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) > minDistance) {
    if (distance > 500) {
        StatsPanel(true);   
    } else if(distance > 0) {
        ClickKnown();
    }else {
        ClickDontKnown();
    }
  }
  touchEndX = 0;
  touchEndX = 0;
};

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

//close modal of streak's congr 
document.getElementById("btn-modal-streak-yay").addEventListener('click', function() {
    document.getElementById("modal-overlay-streak").style.display = "none";
});