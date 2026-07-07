const buttLang = document.getElementById('butt-lang');
const dropdown = document.getElementById('dropdown-lang');

function openDropdown() {
    dropdown.style.display = "block";
}

function closeDropdown() {
    dropdown.style.display = "none";
}

function Dropdown() {
    if(dropdown.style.display === "none") openDropdown();
    else closeDropdown();
}

buttLang.addEventListener('click', Dropdown);