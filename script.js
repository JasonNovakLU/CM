// Path to images folder
const pieceImages = {
    black: {
        king: "images/black-king.png",
        queen: "images/black-queen.png",
        rook: "images/black-rook.png",
        bishop: "images/black-bishop.png",
        knight: "images/black-knight.png",
        pawn: "images/black-pawn.png",
    },
    white: {
        king: "images/white-king.png",
        queen: "images/white-queen.png",
        rook: "images/white-rook.png",
        bishop: "images/white-bishop.png",
        knight: "images/white-knight.png",
        pawn: "images/white-pawn.png",
    },
};

// Initial board setup
const initialSetup = [
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"], // White back rank
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"], // White pawns
    [], [], [], [], // Empty rows
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"], // Black pawns
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"], // Black back rank
];

const colors = ["white", "black"]; // Color of pieces by row

// Select the chessboard container
const chessboard = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Alternate colors
        if ((row + col) % 2 === 0) {
            cell.classList.add("white");
        } else {
            cell.classList.add("black");
        }

        // Add piece images if present in initialSetup
        if (initialSetup[row][col]) {
            const piece = initialSetup[row][col];
            const color = row < 2 ? "white" : "black"; // Determine piece color
            const img = document.createElement("img");
            img.src = pieceImages[color][piece];
            img.alt = `${color} ${piece}`;
            img.style.width = "100%";
            img.style.height = "100%";
            cell.appendChild(img);
        }

        chessboard.appendChild(cell);
    }
}
