const tesstImTrSk_modal = document.getElementById('tesstImTrSk');
const word_d = document.getElementById('word');

const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');

function reloadWord() {
    if(cards.length <= 4) {
        alert("You can't improve your skills. Please, add 4 cards at least.");
        return;
    }
    let clickedElement;
    let num = Math.floor(Math.random() * cards.length)
    const buttons = [ans1, ans2, ans3, ans4];

    OpenCloseModal('modal1', 'flex');
    
    word_d.innerText = cards[num].word;
    for(let i = 0; i < 4; i++) {
        let [random1, random2, random3, random4] = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        buttons[random1].innerText = cards[num].translation
        buttons[random2].innerText = cards[Math.floor(Math.random() * cards.length)].translation
        buttons[random3].innerText = cards[Math.floor(Math.random() * cards.length)].translation
        buttons[random4].innerText = cards[Math.floor(Math.random() * cards.length)].translation
    }

    buttons.forEach(btn => {
        btn.onclick = (event) => {
            clickedElement = event.target;

            if (clickedElement.innerText === cards[num].translation) {
                alert("Correct");
                addCoins(10);
                reloadWord();
            } else {
                alert(`Not correct, correct answer ${cards[num].translation}.`);
                reloadWord();
            }
        };
    });
}