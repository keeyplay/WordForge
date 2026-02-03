document.getElementById('btn_start').addEventListener('click', function() {
    this.classList.add('clicked');

    setTimeout(() => {     
        const infoElement = document.getElementById('info');
        const infoHTML = infoElement.outerHTML;
        
        document.body.innerHTML = '';
        document.body.style.background = "white";
        
        document.body.innerHTML = infoHTML;
        
        const newContent = `
            <h1>I will continue developing this project tomorrow</h1>
        `;
        document.body.innerHTML += newContent;
    }, 2000); 
});