document.getElementById("export").addEventListener('click', function() {exportCards()});

function exportCards() {
    // get profile from localstorage
    const profileEx = localStorage.getItem('Profile');
    
    if (!profileEx) {
        alert("You don't have any cards");
        return;
    }
    
    // parse profile with error handling
    let profile = JSON.parse(localStorage.getItem(profileEx));
    
    const cards = profile.languageCards;
    if(!cards) {
        alert("You don't have any cards");
        return;
    }
    const streaks = profile.streaks;
    
    // export data
    const exportData = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        profile: profileEx,
        streaks: streaks,
        cards: cards,
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    
    // create and download file
    downloadFile(jsonString, 'vocab-cards.json', 'application/json');
}

function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // cleanup
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 100);
}