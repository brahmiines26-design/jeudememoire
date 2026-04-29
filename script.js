// 🎯 niveaux
const level1 = ["👗","👗","👠","👠","👜","👜","💄","💄"];
const level2 = ["🐱","🐱","🐾","🐾","😻","😻","🎀","🎀"];

let currentLevel = 1;

let board = document.getElementById("board");
let mission = document.getElementById("mission");
let win = document.getElementById("win");

let flipSound = document.getElementById("flipSound");
let matchSound = document.getElementById("matchSound");
let winSound = document.getElementById("winSound");

let first = null;
let second = null;
let lock = false;
let matched = 0;

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function getSymbols() {
    return currentLevel === 1 ? level1 : level2;
}

function createBoard() {

    board.innerHTML = "";
    matched = 0;

    document.body.className = currentLevel === 1 ? "level1" : "level2";

    let symbols = shuffle([...getSymbols()]);

    symbols.forEach(symbol => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <div class="card-inner">
            <div class="card-face front">${symbol}</div>
            <div class="card-face back"></div>
        </div>
        `;

        card.dataset.symbol = symbol;

        card.onclick = () => flip(card);

        board.appendChild(card);
    });
}


function flip(card) {

    if (lock || card === first || card.classList.contains("flip")) return;

    flipSound.currentTime = 0;
    flipSound.play();

    card.classList.add("flip");

    if (!first) {
        first = card;
        return;
    }

    second = card;
    lock = true;

    if (first.dataset.symbol === second.dataset.symbol) {

        matchSound.currentTime = 0;
        matchSound.play();

        matched++;
        reset();

        if (matched === getSymbols().length / 2) {
            nextLevel();
        }

    } else {
        setTimeout(() => {
            first.classList.remove("flip");
            second.classList.remove("flip");
            reset();
        }, 800);
    }
}

function reset() {
    first = null;
    second = null;
    lock = false;
}

function nextLevel() {

    if (currentLevel === 1) {

        currentLevel = 2;
        mission.textContent = "🐱 Aide Barbie à retrouver son chat !";

        setTimeout(createBoard, 1000);

    } else {

        document.body.className = "win-bg";

        winSound.currentTime = 0;
        winSound.play();

        win.classList.remove("hidden");
    }
}

document.getElementById("restart").onclick = () => {
    currentLevel = 1;
    mission.textContent = "👗 Aide Barbie à retrouver ses vêtements";
    win.classList.add("hidden");
    createBoard();
};

createBoard();