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
            <div id="all-content">
                <div id="new-content">
                    <div id="abtsaas">
                        <h1>About WordForge</h1>
                    </div>
                    <div id="logo-name"><h1>WordForge</h1></div>
                    <div id="abtme">
                        <h1>About me</h1>
                    </div>
                </div>
                <div id="links">
                    <div id="github">
                        <a href="https://github.com/keeyplay/WordForge" target="_blank"><img src="assets/pic/github.png" style="max-width: 50px"></a>
                    </div>
                    <div id="twitter">
                        <a href="https://x.com/keeyplay" target="_blank"><img src="assets/pic/x.jpg" style="max-width: 50px"></a>
                    </div>
                    <div id="mysite">
                        <a href="" target="_blank"><img src="assets/pic/website.png" style="max-width: 50px"></a>
                    </div>
                </div>
            </div>
        `;
        document.body.style.height = "100vh";
        // getElementById("logo-name").classList.add('ani');
        document.body.innerHTML += newContent; 
    }, 1500); 
    
});