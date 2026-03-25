let modalAccounts = document.getElementById("modalAccountsContainer");

function openModalLocalAccounts() {
    // document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
    if(modalAccounts.style.display === "flex") {
        modalAccounts.style.display = "none";
    } else {
        modalAccounts.style.display = "flex";
        document.getElementById("buttonLocalAccounts").classList.toggle("clicked")
        ThemeSwitchFunc();
    } 
    document.body.style.overflow = 'hidden';
}

document.getElementById("accounts-panel-close").addEventListener("click", function() { //close modal
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