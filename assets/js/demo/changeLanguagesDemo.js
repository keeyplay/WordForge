const buttLang = document.getElementById('butt-lang');
const dropdown = document.getElementById('dropdown-lang');

function openDropdown() {
    dropdown.classList.add('visible');
}

function closeDropdown() {
    dropdown.classList.remove('visible');
}

function Dropdown() {
    if(!dropdown.classList.contains('visible')) openDropdown();
    else closeDropdown();
}

buttLang.addEventListener('click', Dropdown);