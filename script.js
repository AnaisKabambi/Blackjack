//Initializing elements
let Blackjack = {};
Blackjack.playercards = document.getElementById("player-cards");
Blackjack.computercards = document.getElementById("computer-cards");
Blackjack.results = document.getElementById("results");
Blackjack.hit = document.getElementById("hit");
Blackjack.stand = document.getElementById("stand");
Blackjack.run = document.getElementById("run");
Blackjack.playerscore = document.getElementById("player-score");
Blackjack.computerscore = document.getElementById("computer-score");
Blackjack.updates = document.getElementById("updates");

Blackjack.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
Blackjack.values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    //adding values to Blackjack.values
    let Ace = 1
    let Two = 2
    let Three = 3
    let Four = 4
    let Five = 5
    let Six = 6
    let Seven = 7
    let Eight = 8
    let Nine = 9
    let Ten = 10
    let Jack = 11
    let Queen = 12
    let King = 13

//buttons
document.getElementById("run").addEventListener("click",makeCard1);
document.getElementById("run").addEventListener("click",makeCard2);
document.getElementById("hit").addEventListener("click",addCard1,);
document.getElementById("hit").addEventListener("click",addCard2);
document.getElementById("player-card1").style.display = 'none';
document.getElementById("player-card2").style.display = 'none';
document.getElementById("computer-card1").style.display = 'none';
document.getElementById("computer-card2").style.display = 'none';

//initial playercards
function makeCard1() {
    let suit = Blackjack.suits[Math.floor(Math.random()*Blackjack.suits.length)];
    let value = Blackjack.values[Math.floor(Math.random()*Blackjack.values.length)];
    let name = value + " of " + suit;
    console.log(name)

    //displaying cards
    function displayCardsP() {
        let display = document.getElementById("player-card1").innerHTML = name;
    }
    displayCardsP();
}
makeCard1();

//initial computercards
function makeCard2() {
    let suit = Blackjack.suits[Math.floor(Math.random()*Blackjack.suits.length)];
    let value = Blackjack.values[Math.floor(Math.random()*Blackjack.values.length)];
    let name = value + " of " + suit;
    console.log(name)

    //displaying cards
    function displayCardsP() {
        let display = document.getElementById("computer-card1").innerHTML = name;
    }
    displayCardsP();
}
makeCard2();

//adding playercards
function addCard1() {
    let suit = Blackjack.suits[Math.floor(Math.random()*Blackjack.suits.length)];
    let value = Blackjack.values[Math.floor(Math.random()*Blackjack.values.length)];
    let name = value + " of " + suit;
    console.log(name)

    //displaying cards
    function displayCardsP() {
        let display = document.getElementById("player-card2").innerHTML = name;
    }
    displayCardsP();
}
addCard1();

//adding computercards
function addCard2() {
    let suit = Blackjack.suits[Math.floor(Math.random()*Blackjack.suits.length)];
    let value = Blackjack.values[Math.floor(Math.random()*Blackjack.values.length)];
    let name = value + " of " + suit;
    console.log(name)

    //displaying cards
    function displayCardsP() {
        let display = document.getElementById("computer-card2").innerHTML = name;
    }
    displayCardsP();
}
addCard2();

//Display cards onclick
function showRun() {
    document.getElementById("player-card1").style.display = 'block';
    document.getElementById("computer-card1").style.display = 'block';
}

function showHit() {
    document.getElementById("player-card2").style.display = 'block';
    document.getElementById("computer-card2").style.display = 'block';
}

function addPlayerCards() {
    if (makeCard1() + addCard1() === 21) {
        Blackjack.updates.innerHTML = "Congratulations! You won!"
    }
    if (makeCard1() + addCard1() > 21) {
        Blackjack.updates.innerHTML = "Oh no! You're total is over 21!"
    }
}
addPlayerCards();