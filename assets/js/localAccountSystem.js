let modalAccounts = document.getElementById("modalAccountsContainer");

function openModalLocalAccounts() {
        modalAccounts.style.display = "flex";
        document.getElementById("buttonLocalAccounts").classList.toggle("clicked")
        switchLanguageForModal(localStorage.getItem("language"));
        for(let accountsCount = 0; accountsCount < localStorage.length; accountsCount++) {
            if(localStorage.key(accountsCount) !== "language" && localStorage.key(accountsCount) !== "Profile" && localStorage.key(accountsCount) !== "ThemeMode" && localStorage.key(accountsCount) !== "languageCards") {
                if(localStorage.key(accountsCount) === profile) {
                    document.getElementById("accounts").innerHTML += `
                        <div class="containerMenuAccounts">
                            <h2 class="deleteAccountButton" data-profile="${localStorage.key(accountsCount)}">×</h2>
                            <h2 class="OneProfile">${localStorage.key(accountsCount)} ✔️</h2>
                        </div>
                    `;
                } else {
                    document.getElementById("accounts").innerHTML += `
                        <div class="containerMenuAccounts">
                            <h2 class="deleteAccountButton" data-profile="${localStorage.key(accountsCount)}">×</h2>
                            <h2 class="OneProfile">${localStorage.key(accountsCount)}</h2>
                        </div>
                    `;
                }
            }
        }
        document.getElementById("all-cards-county").innerText = "Multi-Verse Accounts (" + HowManyProfiles() + ")";
        document.querySelectorAll(".OneProfile").forEach(function(e) {
            e.addEventListener('click', function() {
                localStorage.setItem("Profile", e.textContent);
                window.location.reload();
            });
        });
        document.querySelectorAll(".deleteAccountButton").forEach(function(e) {
            let SelectedProfile = e.getAttribute("data-profile");
            e.addEventListener('click', function() {
                if(HowManyProfiles() === 1) {
                    for(let el = 0; el < localStorage.length; el++) {
                        if(localStorage.key(el) === SelectedProfile) {
                            localStorage.removeItem(localStorage.key(el));
                        }
                    }
                    document.getElementById("accounts").innerHTML = "";
                    modalAccounts.style.display = "none";
                    document.getElementById("buttonLocalAccounts").classList.remove("clicked");
                    document.body.style.overflow = '';
                    openModalLocalAccounts();

                    localStorage.removeItem("Profile");

                    document.getElementById("modalAddAccounts").style.display = "flex";
                    document.getElementById("accountsAdd-panel-close").style.display = "none";

                } else {
                    if(localStorage.getItem("Profile") === SelectedProfile) {
                        for(let el = 0; el < localStorage.length; el++) {
                            if(localStorage.key(el) === SelectedProfile) {
                                localStorage.removeItem(localStorage.key(el));
                            }
                        }
                        profile = ArrayOfProfiles()[0];
                        localStorage.setItem("Profile", ArrayOfProfiles()[0]);

                        window.location.reload();
                    } else {
                        for(let el = 0; el < localStorage.length; el++) {
                            if(localStorage.key(el) === SelectedProfile) {
                                localStorage.removeItem(localStorage.key(el));
                            }
                        }
                        document.getElementById("accounts").innerHTML = "";
                        modalAccounts.style.display = "none";
                        document.getElementById("buttonLocalAccounts").classList.remove("clicked");
                        document.body.style.overflow = '';
                        openModalLocalAccounts()

                        localStorage.removeItem("Profile");   
                    }
                }
            });
        });
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

function HowManyProfiles() {
    let count = 0;
    for(let accountsCount = 0; accountsCount < localStorage.length; accountsCount++) {
        if(localStorage.key(accountsCount) !== "language" && localStorage.key(accountsCount) !== "Profile" && localStorage.key(accountsCount) !== "ThemeMode" && localStorage.key(accountsCount) !== "languageCards") {
            count++
                
        }
    };
    return count;
}

function ArrayOfProfiles() {
    let arr = [];
    for(let accountsCount = 0; accountsCount < localStorage.length; accountsCount++) {
        if(localStorage.key(accountsCount) !== "language" && localStorage.key(accountsCount) !== "Profile" && localStorage.key(accountsCount) !== "ThemeMode" && localStorage.key(accountsCount) !== "languageCards") {
            arr.push(localStorage.key(accountsCount));      
        }
    };
    return arr;
}

function ProfileEmpty(dlt = false) {
    let Empty = false;
    if(localStorage.length === 0) Empty = true;
    for(let prof = 0; prof < localStorage.length; prof++) {
        if(localStorage.key(prof) === "") {
            Empty = true;
            if(dlt === true) {
                localStorage.removeItem(prof);
            }
        }
    }
    
    if(dlt === false) return Empty;
}

ProfileEmpty(true);

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