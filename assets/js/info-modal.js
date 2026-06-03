function openInfoModal() {
    const modal = document.getElementById('info-modal-overlay');
    modal.style.display = 'flex'; 

    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    //close if pressed esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeInfoModal();
        }
    });
}

function closeInfoModal() {
    const modal = document.getElementById('info-modal-overlay');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 300);
}
