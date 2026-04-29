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