let modalAccounts = document.getElementById("modalAccountsContainer");

function openModalLocalAccounts() {
    // document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
    if(modalAccounts.style.display === "flex") {
        modalAccounts.style.display = "none";
    } else {
        modalAccounts.style.display = "flex";
        document.getElementById("buttonLocalAccounts").classList.toggle("clicked")
        ThemeSwitchFunc();
        for(let accountsCount = 0; accountsCount < localStorage.length; accountsCount++) {
            if(localStorage.key(accountsCount) !== "language" && localStorage.key(accountsCount) !== "Profile" && localStorage.key(accountsCount) !== "ThemeMode" && localStorage.key(accountsCount) !== "languageCards") {
                if(localStorage.key(accountsCount) === profile) {
                    document.getElementById("accounts").innerHTML += `
                        <div>
                            <h2 class="OneProfile">${localStorage.key(accountsCount)} ✔️</h2>
                        </div>
                    `;
                } else {
                    document.getElementById("accounts").innerHTML += `
                        <div>
                            <h2 class="OneProfile">${localStorage.key(accountsCount)}</h2>
                        </div>
                    `;
                }
            }
        }
        document.querySelectorAll(".OneProfile").forEach(function(e) {
            e.addEventListener('click', function() {
                localStorage.setItem("Profile", e.textContent);
                window.location.reload();
            });
        });
    } 
    document.body.style.overflow = 'hidden';
}
document.getElementById("accounts-panel-close").addEventListener("click", function() { //close modal
    document.getElementById("accounts").innerHTML = "";
    modalAccounts.style.display = "none";
    document.getElementById("buttonLocalAccounts").classList.remove("clicked");
    document.body.style.overflow = '';
});

document.getElementById("deletealldata").addEventListener("click", function() {
    let conf = confirm("Are you sure? If all data is deleted, you won't be able to get it back.");
    if(conf === true) { localStorage.clear(); window.location.reload(); }
});


//open modals create new account
document.getElementById("addAccount").addEventListener("click", function() {
    modalAccounts.style.display = "none";
    document.getElementById("modalAddAccounts").style.display = "flex";
}); 


// ------------------ Choose Language system ----------------
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const languageItems = document.querySelectorAll('.dropdown-content a');
let selectedLang;

dropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    
    dropdownContent.classList.toggle('show');
});

languageItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        selectedLang = item.getAttribute('data-lang');
        dropdownBtn.textContent = selectedLang; 
        dropdownContent.classList.remove('show');
        document.getElementById("continueModal").style.display = "flex";
    });
});

window.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});

//close add account 
document.getElementById("accountsAdd-panel-close").addEventListener("click", function(){
    modalAccounts.style.display = "flex";
    document.getElementById("modalAddAccounts").style.display = "none";
});

document.getElementById("continue").addEventListener('click', function() {
    localStorage.setItem("Profile", selectedLang);
    localStorage.setItem(selectedLang, []);
    document.getElementById("modalAddAccounts").style.display = "none";
    window.location.reload();
});

// function migrationOldSystem() {
//     if(!localStorage.getItem("Profile")) {
//         const storageObject = Object.keys(localStorage).reduce((obj, key) => {
//             obj[key] = localStorage.getItem(key);
//             return obj;
//         }, {});

//         localStorage.setItem("Profile", "other");
//         localStorage.setItem("other", JSON.stringify(storageObject));
//     }
// }