document.getElementById('btn_start').addEventListener('click', function() {
    this.classList.add('clicked');

    setTimeout(() => {     
        const infoElement = document.getElementById('info');
        const infoHTML = infoElement.outerHTML;
        
        document.body.innerHTML = '';
        document.body.style.background = "white";
        
        document.body.innerHTML = infoHTML;
        // document.body.style.display = "block";
        
        const newContent = `
            <div id="new-content">
                <div id="logo-name"><h1>WordForge</h1></div>
            </div>
            <div>
                <!-- <h1 style="display: flex; justigy-content: end;">EN</h1> -->
            </div>
        `;
        // getElementById("logo-name").classList.add('ani');
        document.body.innerHTML += newContent; 
    }, 1500); 
    
});