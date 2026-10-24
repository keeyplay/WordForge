const modalIM = document.getElementById('ChooseWayComp');
const buttonofmodalIM = document.getElementById('btn-improve-card');

function improveOpenModal() {
    modalIM.style.display = "flex";
}

function improveCloseModal() {
    modalIM.style.display = "none";
}

document.addEventListener('click', (event) => {
    if (!modalIM.contains(event.target) && event.target !== buttonofmodalIM) {
        improveCloseModal();
  }
});
