function FontsChange() {
    if(localStorage.getItem('font') === 'ArchivoBlack') {
        document.body.style.fontFamily = '"Andika", sans-serif';
        localStorage.setItem('font', 'Andika');
    } else if(localStorage.getItem('font') === 'Andika'){
        document.body.style.fontFamily = '"Archivo Black", sans-serif';
        localStorage.setItem('font', 'ArchivoBlack');
    }
}

function FontsCheck() {
    if(localStorage.getItem('font') === 'ArchivoBlack') {
        document.body.style.fontFamily = '"Archivo Black", sans-serif';
    } else if(localStorage.getItem('font') === 'Andika') {
        document.body.style.fontFamily = '"Andika", sans-serif';
    } else {
        localStorage.setItem('font', 'Andika');
    }
}

FontsCheck();