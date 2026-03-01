document.getElementById("export").addEventListener('click', function() {exportCards()});

function exportCards() {
    // get cards from localstorage
    const cards = localStorage.getItem('languageCards');
    const lang = localStorage.getItem('language');
    const streaks = localStorage.getItem('streaks');
    
    if (!cards) {
        alert("You don't have any cards");
        return;
    }
    
    // export data
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(), // "2025-01-15T14:30:45.123Z" for example
        lang: lang,
        streaks: JSON.parse(streaks),
        cards: JSON.parse(cards)
    };
    
    const jsonString = JSON.stringify(exportData);
    
    // create and download file
    downloadFile(jsonString, 'vocab-cards.json', 'application/json');
}

function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob); //url
    const link = document.createElement('a');
    
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // clear
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 100);
}