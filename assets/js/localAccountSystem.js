let modalAccounts = document.getElementById("modalAccountsContainer");

function openModalLocalAccounts() {
    // document.getElementById("buttonLocalAccounts").src = "assets/pic/3lines_dark.png";
    if(modalAccounts.style.display === "flex") {
        modalAccounts.style.display = "none";
    } else {
        modalAccounts.style.display = "flex";
    } 
}

document.getElementById("accounts-panel-close").addEventListener("click", function() { //close modal
    modalAccounts.style.display = "none";
});