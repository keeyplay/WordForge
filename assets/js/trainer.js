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

let PremiumActivated = reloadPremium().then(result => {
    PremiumActivated = result;
});

// achivments sector
const milestones = {
    1: {
        en: "First card added! 🎉",
        ru: "Первая карточка добавлена! 🎉",
        de: "Erste Karte hinzugefügt! 🎉",
        pl: "Pierwsza karta dodana! 🎉",
        sr: "Prva kartica dodana! 🎉",
        ja: "最初のカードが追加されました！🎉"
    },
    5: {
        en: "5 cards — great start!",
        ru: "5 карточек — отличный старт!",
        de: "5 Karten — großartiger Start!",
        pl: "5 kart — świetny start!",
        sr: "5 kartica — odličan početak!",
        ja: "5枚のカード — 素晴らしいスタート！"
    },
    10: {
        en: "10 cards — you're learning!",
        ru: "10 карточек — ты уже учишься!",
        de: "10 Karten — du lernst!",
        pl: "10 kart — już się uczysz!",
        sr: "10 kartica — već učiš!",
        ja: "10枚のカード — もう学んでいる！"
    },
    25: {
        en: "25 cards — keep going!",
        ru: "25 карточек — продолжай в том же духе!",
        de: "25 Karten — mach weiter so!",
        pl: "25 kart — tak trzymaj!",
        sr: "25 kartica — nastavi tako!",
        ja: "25枚のカード — その調子！"
    },
    50: {
        en: "50 cards — wow!",
        ru: "50 карточек — вау!",
        de: "50 Karten — wow!",
        pl: "50 kart — wow!",
        sr: "50 kartica — vau!",
        ja: "50枚のカード — わあ！"
    },
    100: {
        en: "100 cards — A1 Beginner! You know the essential core of language. 🎯",
        ru: "100 карточек — A1 Начальный! Ты знаешь основу языка. 🎯",
        de: "100 Karten — A1 Anfänger! Du kennst den wesentlichen Kern der Sprache. 🎯",
        pl: "100 kart — A1 Początkujący! Znasz podstawę języka. 🎯",
        sr: "100 kartica — A1 Početnik! Znaš osnovu jezika. 🎯",
        ja: "100枚のカード — A1 初心者！言語の基本を理解しています。🎯"
    },
    500: {
        en: "500 cards — still A1, but getting stronger! 💪",
        ru: "500 карточек — всё ещё A1, но становишься сильнее! 💪",
        de: "500 Karten — immer noch A1, aber stärker werdend! 💪",
        pl: "500 kart — wciąż A1, ale stajesz się silniejszy! 💪",
        sr: "500 kartica — još uvek A1, ali postaješ jači! 💪",
        ja: "500枚のカード — まだA1だけど、強くなっている！💪"
    },
    1000: {
        en: "1000 cards — A2 Elementary! You can handle everyday situations now. 🗣️",
        ru: "1000 карточек — A2 Элементарный! Теперь ты справляешься с повседневными ситуациями. 🗣️",
        de: "1000 Karten — A2 Grundstufe! Du kannst jetzt alltägliche Situationen bewältigen. 🗣️",
        pl: "1000 kart — A2 Podstawowy! Teraz radzisz sobie w codziennych sytuacjach. 🗣️",
        sr: "1000 kartica — A2 Osnovni! Sada se snalaziš u svakodnevnim situacijama. 🗣️",
        ja: "1000枚のカード — A2 初級！日常的な状況に対応できます。🗣️"
    },
    2000: {
        en: "2000 cards — B1 Intermediate! You're an independent user. HUGE milestone! 🚀",
        ru: "2000 карточек — B1 Средний! Ты самостоятельный пользователь. ОГРОМНЫЙ успех! 🚀",
        de: "2000 Karten — B1 Mittelstufe! Du bist ein unabhängiger Nutzer. RIESIGER Meilenstein! 🚀",
        pl: "2000 kart — B1 Średniozaawansowany! Jesteś samodzielnym użytkownikiem. OGROMNY sukces! 🚀",
        sr: "2000 kartica — B1 Srednji! Samostalan si korisnik. VELIKI uspeh! 🚀",
        ja: "2000枚のカード — B1 中級！独立したユーザーです。大きな節目！🚀"
    },
    4000: {
        en: "4000 cards — B2 Upper Intermediate! Fluent conversations unlocked. 🔥",
        ru: "4000 карточек — B2 Выше среднего! Беглые разговоры разблокированы. 🔥",
        de: "4000 Karten — B2 Oberstufe! Fließende Gespräche freigeschaltet. 🔥",
        pl: "4000 kart — B2 Wyższy średniozaawansowany! Płynne rozmowy odblokowane. 🔥",
        sr: "4000 kartica — B2 Viši srednji! Tečni razgovori otključani. 🔥",
        ja: "4000枚のカード — B2 中上級！流暢な会話が可能になりました。🔥"
    },
    8000: {
        en: "8000 cards — C1 Advanced! Native-like command. Massive respect! 🏆",
        ru: "8000 карточек — C1 Продвинутый! Владение на уровне носителя. Огромное уважение! 🏆",
        de: "8000 Karten — C1 Fortgeschritten! Muttersprachliches Niveau. Großer Respekt! 🏆",
        pl: "8000 kart — C1 Zaawansowany! Poziom native speakera. Ogromny szacunek! 🏆",
        sr: "8000 kartica — C1 Napredni! Nivo izvornog govornika. Ogromno poštovanje! 🏆",
        ja: "8000枚のカード — C1 上級！ネイティブレベル。大きな敬意！🏆"
    },
    16000: {
        en: "16000 cards — C2 Proficiency! You're a master of language. 👑",
        ru: "16000 карточек — C2 Владение в совершенстве! Ты мастер языка. 👑",
        de: "16000 Karten — C2 Perfektion! Du bist ein Meister der Sprache. 👑",
        pl: "16000 kart — C2 Biegłość! Jesteś mistrzem język. 👑",
        sr: "16000 kartica — C2 Profesionalno! Ti si majstor jezika. 👑",
        ja: "16000枚のカード — C2 熟練！言語の達人です。👑"
    },
    20000: {
        en: "20000 cards — WordForge Legend! 🌟",
        ru: "20000 карточек — Легенда WordForge! 🌟",
        de: "20000 Karten — WordForge Legende! 🌟",
        pl: "20000 kart — Legenda WordForge! 🌟",
        sr: "20000 kartica — WordForge Legenda! 🌟",
        ja: "20000枚のカード — WordForge レジェンド！🌟"
    }
};

let streakMessages = [];

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

function getPastDateString(daysAgo) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - daysAgo);
    
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

function getTodayDateString() {
    return getPastDateString(0); 
}

function getYesterdayDateString() {
    return getPastDateString(1); 
}

function getBeforeYesterdayDateString() {
    return getPastDateString(2); 
}

function get3DaysAgoDateString() {
    return getPastDateString(3); 
}

function get4DaysAgoDateString() {
    return getPastDateString(4); 
}

function get5DaysAgoDateString() {
    return getPastDateString(5); 
}

function get6DaysAgoDateString() {
    return getPastDateString(6);
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

function renderStreak() {
    document.getElementById("stat-streak").innerText = "🔥 " + streaks.streakCount;
    UpdateStreakMessageTranslate();
    if(streaks.streakCount % 5 === 0 && streaks.streakCount != 0) {
        if(!streaks.CongToday) {
            document.getElementById("modal-overlay-streak").style.display = "flex";
            document.getElementById("message-streak").innerText = streakMessages[Math.floor(Math.random() * 15)];
            document.getElementById("all-streaks-county").innerText = "Your new streak - " + profileData.streaks.streakCount;
            streaks.CongToday = true;
            localStorage.setItem(profile, JSON.stringify(profileData));
            addCoins(10);
        } 
    } else if(streaks.streakCount === 1 && streaks.streakCount != 0) {
        if(!streaks.CongToday && localStorage.length >= 3) {
            document.getElementById("modal-overlay-streak").style.display = "flex";
            document.getElementById("message-streak").innerText = streakMessages[Math.floor(Math.random() * 15)];
            document.getElementById("all-streaks-county").innerText = "Your new streak - " + profileData.streaks.streakCount;
            streaks.CongToday = true;
            localStorage.setItem(profile, JSON.stringify(profileData));
            addCoins(10);
        } 
    } else {
            streaks.CongToday = false;
            localStorage.setItem(profile, JSON.stringify(profileData));
    }
}
updateStreak()

//render cards ---------------------------------------------------------------------

function renderCards() {
    updateCoinsFooter();
    UpdateWithoutLearnedCards();
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
            if(cards[randomCount].knowCount === 5) {
                addCoins(5);
            }
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
    if(cards.length >= 299) {
        if(PremiumActivated) {
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
            addCoins(1);

            //achivments
            if(milestones[cards.length]) {
                showNotification("Cards milestone", milestones[cards.length][localStorage.getItem("language")], "ach");
            }
        } else {
            alert("Upradge to premium mode for new cards");
        }
    } else {
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
        addCoins(1);

        //achivments
        if(milestones[cards.length]) {
            showNotification("Cards milestone", milestones[cards.length][localStorage.getItem("language")], "ach");
        }
    }
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

    //close if pressed esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById("modal-overlay").style.display = "none"; 
            document.body.style.overflow = '';
        }
    });
});
//close modal add
document.getElementById("btn-modal-cancel").addEventListener('click', function() {
    document.getElementById("modal-overlay").style.display = "none"; 
    document.body.style.overflow = '';
});
//`start` again 
document.getElementById("btn-start-again").addEventListener('click', function() {
    if(CounterLernedCards() !== cards.length) {
        cardWord = document.getElementById("card-word");
        cardsAdd = [...cards];
        localStorage.setItem(profile, JSON.stringify(profileData));
        updateRandomCount();
        renderCards();
        document.getElementById("cards-stack").style.display = "flex";
        document.getElementById("swipe-actions").style.display = "flex";
        document.getElementById("done-state").style.display = "none";
    } else {
        alert("all cards are learned");
    }
});

//------------------------modal edit---------------------------------
//open modal edit
document.getElementById("btn-edit-card").addEventListener('click', openModalEdit);
function openModalEdit() {
    document.getElementById("modal-overlay-edit").style.display = "flex";
    document.getElementById("all-cards-county1").innerText = "All Cards (" + cards.length + ")";
    document.body.style.overflow = 'hidden';
    
    for(let el = 0; el < cards.length; el++) {
        if(cards[el].knowCount >= 5) {
            document.getElementById("cards-edit").innerHTML += `
                <div class='card-edit'>
                    <h2 class="text-of-card">${el+1}. ${cards[el].word} - ${cards[el].translation} <span title="Learned card (you clicked 'know' 5+ times)">✔️<span></h2>
                    <h2 class="btn-delete-card" id="btn-delete-card/${el}">Delete</h2>
                </div>
            `;
        } else {
            document.getElementById("cards-edit").innerHTML += `
                <div class='card-edit'>
                    <h2 class="text-of-card">${el+1}. ${cards[el].word} - ${cards[el].translation}</h2>
                    <h2 class="btn-delete-card" id="btn-delete-card/${el}">Delete</h2>
                </div>
            `;
        }
        document.getElementById("counter-of-learned-cards").innerText = CounterLernedCards();
        
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

    //close if pressed esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById("modal-overlay-edit").style.display = "none"; 
            document.getElementById("cards-edit").innerHTML = "";
            document.body.style.overflow = '';
        }
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
    if(distance < -500) {
        openModalLocalAccounts();
    } else if (distance > 500) {
        StatsPanel(true);
    } else if(distance > 0) {
        ClickKnown();
    } else {
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

function CounterLernedCards() {
    let count = 0;
    for(let el = 0; el < cards.length; el++) {
        if(cards[el].knowCount >= 5) count++;
    }
    return count;
}

document.getElementById('hidelearnedCards').addEventListener('change', function() {
    let isChecked = this.checked; 
    
    profileData.hide = isChecked;
    localStorage.setItem(profile, JSON.stringify(profileData));
    UpdateWithoutLearnedCards();
    renderCards();
});

function UpdateWithoutLearnedCards() {
    if(profileData.hide) {
        let cardAddUpdate = [];
        for(let el = 0; el < cardsAdd.length; el++) {
            if(cardsAdd[el].knowCount < 5) {
                cardAddUpdate.push(cardsAdd[el]);
            }
        }
        cardsAdd = cardAddUpdate;
    }
}

//change logo on mobile
function checkWidth() {
    const el = document.getElementById('trainer-logo');
    el.innerText = window.innerWidth <= 480 ? 'WF' : 'WordForge';
}

window.addEventListener('resize', checkWidth);
window.addEventListener('DOMContentLoaded', checkWidth);

function updateCoinsFooter() {
    const coins = localStorage.getItem('coins');
    document.getElementById('coins-footer').innerText = "🪙 " + coins;
}