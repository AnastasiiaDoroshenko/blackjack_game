let firstCard;
let secondCard;
let card;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl =  document.querySelector("#sum-el");
let cardsEl =  document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
let player = {
    name: "An",
    credit: 150
}
playerEl.textContent = player.name + ": $" + player.credit;
function getRandomCard() {
    let randomNumber =Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1){
        return 11;
    } else if (randomNumber >= 11){
        return 10;
    }
    else {
        return randomNumber;
    }
}
function countSum() {
    sum = 0;
    for (let i = 0; i < cards.length; i++){
        sum += cards[i];
    }
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i= 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        hasBlackJack = true;
        message = "Woohoo! You've got Blackjack!";
    } else {
        isAlive = false;
        message = "You're out of the game!"
    }
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    countSum();
    renderGame();
}
function newCard() {
    if (isAlive && !hasBlackJack){
        card = getRandomCard();
        cards.push(card);
        countSum();
        renderGame();
    }
}
