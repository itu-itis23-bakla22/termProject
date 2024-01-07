const images = ["İmg1.svg", "İmg2.svg", "İmg3.svg", "İmg4.svg", "İmg5.svg"];
const Score = document.getElementById("Score");
const button = document.getElementById("button");
const cards = document.querySelectorAll(".card");
let expectedIndex = 0;

button.addEventListener("click", startGame);
cards.forEach(card => card.addEventListener("click", cardClicked));

function startGame() {
    expectedIndex = 0;
    shuffle();
    setTimeout(() => {
        hideCards();
    }, 2000);
    Score.textContent = "Score: 0";
}

function hideCards() {
    cards.forEach(card => {
        card.style.backgroundColor = "black";
        card.querySelector(".images").style.visibility = "hidden";
    });
}

function shuffle() {
    const shufImages = [...images].sort(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
        const image = shufImages[index];
        card.innerHTML = `<img class="images" src="${image}" data-filename="${image}">`;
    });
}

function cardClicked() {
    const clickedImage = this.querySelector(".images").getAttribute("data-filename");

    this.style.backgroundColor = "white";
    this.querySelector(".images").style.visibility = "visible";

    if (clickedImage === images[expectedIndex]) {
        expectedIndex++;

        if (expectedIndex === images.length) {
            youWin();
        }
    } else {
        gameOver();
    }

    Score.textContent = "Score: " + (20 * expectedIndex);
}

function youWin() {
    alert("You win congratulations!!!");
    button.textContent = "Restart Game";
}

function gameOver() {
    cards.forEach(card => {
        card.style.backgroundColor = "white";
        card.querySelector(".images").style.visibility = "visible";
    });

    button.textContent = "Restart Game";
    alert("You lost. Try again.");
    Score.textContent = "Score: 0";
}
