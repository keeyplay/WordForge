document.getElementById("import").addEventListener('click', function() {importCards()});
document.getElementById("import-export-div-first").addEventListener('click', function() {importCards()});

function importCards() {
    // open file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json,application/json';
    
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        
        if (!file) return;
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // validate data
                if (validateImportedData(importedData)) {
                    // save in localStorage
                    localStorage.setItem('Profile', importedData.profile);

                    let dataProfile = {
                        "streaks": importedData.streaks,
                        "languageCards": importedData.cards
                    };

                    localStorage.setItem(importedData.profile, JSON.stringify(dataProfile));
                    
                    
                    location.reload();
                    
                } else {
                    alert('Incorrect file', 'error');
                }
            } catch (error) {
                alert('Error reading file: ' + error.message, 'error');
            }
        };
        
        reader.readAsText(file);
    };
    
    fileInput.click();
}

// validate data
function validateImportedData(data) {
    // is object?
    if (!data || typeof data !== 'object') return false;

    //profile?
    if (!data.profile) return false;
    
    // correct?
    // if (!data.version || !data.lang) return false;
    
    // validate streaks
    if (data.streaks) {
        if (typeof data.streaks !== 'object') return false;
        if (data.streaks.streakCount === undefined) return false;
        if (!data.streaks.lastVisitDate) return false;
        if (data.streaks.streakClaimedToday === undefined) return false;
    }
    
    // validate cards
    if (!data.cards || !Array.isArray(data.cards)) return false;
    
    // validate every card
    for (const card of data.cards) {
        if (!card.word || !card.translation) return false;
        if (!card.date) return false;
        if (card.knowCount === undefined) return false;
    }
    
    return true;
}