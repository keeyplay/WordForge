let cardsSt = JSON.parse(localStorage.getItem('languageCards')) || [];
let streaksSt = JSON.parse(localStorage.getItem('streaks')) || {
    streakCount: 0,
    lastVisitDate: null,
    streakClaimedToday: false
};

// migrate old cards to new structure
function migrateOldCards() {
    let changed = false;
    
    for(let i = 0; i < cardsSt.length; i++) {
        // if hasnt date or know Count
        if (!cardsSt[i].date || !cardsSt[i].knowCount) {
            cardsSt[i].date = getTodayDateString();
            cardsSt[i].knowCount = 0;
            changed = true;
        }
    }
    
    // Если были изменения - сохраняем
    if (changed) localStorage.setItem('languageCards', JSON.stringify(cardsSt));
}
migrateOldCards();

// Follow every click in pages
document.addEventListener('DOMContentLoaded', function() {
            const statsButton = document.getElementById('but_stats');
            const statsPanel = document.getElementById('stats-panel');
            const statsOverlay = document.getElementById('stats-overlay');
            const closeButton = document.getElementById('stats-panel-close');
            
            // Function to open panel
            function openStatsPanel() {
                statsPanel.classList.add('active');
                statsOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling

                UpdateStats();
            }
            UpdateStats();
            
            // Function to close panel
            function closeStatsPanel() {
                statsPanel.classList.remove('active');
                statsOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
            
            // Open panel when stats button is clicked
            statsButton.addEventListener('click', openStatsPanel);
            
            // Close panel when close button is clicked
            closeButton.addEventListener('click', closeStatsPanel);
            
            // Close panel when overlay is clicked
            statsOverlay.addEventListener('click', closeStatsPanel);
            
            // Close panel with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && statsPanel.classList.contains('active')) {
                    closeStatsPanel();
                }
            });
});

function UpdateStats() {
    let cardsSt = JSON.parse(localStorage.getItem('languageCards')) || [];
    let streaksSt = JSON.parse(localStorage.getItem('streaks')) || {
        streakCount: 0,
        lastVisitDate: null,
        streakClaimedToday: false
    };

    const allCards = document.getElementById("stats-total-cards");
    const learnCardsDiv = document.getElementById('stats-learned-cards');
    const streak = document.getElementById('stats-streak');
    const todayStat = document.getElementById('stats-today');
    const progressValue = document.getElementById('stats-progress-value');
    const progressFill = document.querySelector('.progress-fill');
    const progressTxT = document.getElementById('progressTxT');

    allCards.innerText = cardsSt.length;
    learnCardsDiv.innerText = UpdateLearnCards();
    streak.innerText = streaksSt.streakCount;
    todayStat.innerText = UpdateTodayCards();

    //progress
    progressValue.innerText = ( UpdateLearnCards() / 10000) * 100 + "%";
    progressFill.style.width = ( UpdateLearnCards() / 10000) * 100 + '%';
    progressTxT.innerText = "(" + UpdateLearnCards() + "/10000)"

    updatePieChart();
};

function UpdateLearnCards() {
    // Get every card
    let count = 0;
    for(let card = 0; card < cardsSt.length; card++) {
        if(cardsSt[card] && cardsSt[card].knowCount >= 5) {
            count++;
        }
    }
    return count;
}

function UpdateTodayCards() {
    let count = 0;
    for(let card = 0; card < cardsSt.length; card++) {
        if((cardsSt[card].date).split("-")[2] === (getTodayDateString()).split("-")[2]) count++;
    }
    return count;
}

function updatePieChart() {
    const pieChart = document.getElementById('pie-chart');
    const legendContainer = document.getElementById('chart-legend');
    
    if (!pieChart || !legendContainer) return;
    
    // Get stats for cards
    const totalCards = cardsSt.length;
    if (totalCards === 0) {
        // Если карточек нет, показываем серую диаграмму
        pieChart.style.background = 'conic-gradient(#ccc 0deg 360deg)';
        legendContainer.innerHTML = '<div class="legend-item"><span class="legend-color" style="background: #ccc"></span><span>No cards (0%)</span></div>';
        return;
    }
    
    // Count cards
    let known = 0;      // knowCount >= 5
    let learning = 0;   // knowCount >= 1 && < 5
    let newCards = 0;   // knowCount = 0
    
    for(let card of cardsSt) {
        if(card.knowCount >= 5) {
            known++;
        } else if(card.knowCount >= 1) {
            learning++;
        } else {
            newCards++;
        }
    }
    
    // precent and cort
    const knownPercent = Math.round((known / totalCards) * 100);
    const learningPercent = Math.round((learning / totalCards) * 100);
    const newPercent = Math.round((newCards / totalCards) * 100);
    
    // conic-gradient
    const knownDeg = (known / totalCards) * 360;
    const learningDeg = (learning / totalCards) * 360;
    const newDeg = (newCards / totalCards) * 360;
    
    // gradient
    let gradient = '';
    let currentAngle = 0;
    
    if (known > 0) {
        gradient += `#4caf50 ${currentAngle}deg ${currentAngle + knownDeg}deg`;
        currentAngle += knownDeg;
    }
    
    if (learning > 0) {
        if (gradient) gradient += ', ';
        gradient += `#ff9800 ${currentAngle}deg ${currentAngle + learningDeg}deg`;
        currentAngle += learningDeg;
    }
    
    if (newCards > 0) {
        if (gradient) gradient += ', ';
        gradient += `#2196f3 ${currentAngle}deg ${currentAngle + newDeg}deg`;
    }
    
    // acccept gradient
    pieChart.style.background = `conic-gradient(${gradient})`;
    
    // update
    legendContainer.innerHTML = `
        <div class="legend-item">
            <span class="legend-color" style="background: #4caf50"></span>
            <span>Known (${knownPercent}%)</span>
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background: #ff9800"></span>
            <span>Learning (${learningPercent}%)</span>
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background: #2196f3"></span>
            <span>New (${newPercent}%)</span>
        </div>
    `;
}
