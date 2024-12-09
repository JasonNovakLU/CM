// Select the chessboard container
const chessboard = document.getElementById("chessboard");

// Loop through 8 rows and 8 columns to create the board
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div"); // Create a square (div)
        cell.classList.add("cell"); // Add the "cell" class for common styles

        // Add alternating colors based on row and column indices
        if ((row + col) % 2 === 0) {
            cell.classList.add("white");
        } else {
            cell.classList.add("black");
        }

        chessboard.appendChild(cell); // Add the square to the chessboard
    }
    // Chess piece Unicode symbols
const pieces = {
    black: {
        king: "♚",
        queen: "♛",
        rook: "♜",
        bishop: "♝",
        knight: "♞",
        pawn: "♟",
    },
    white: {
        king: "♔",
        queen: "♕",
        rook: "♖",
        bishop: "♗",
        knight: "♘",
        pawn: "♙",
    },
};

// Initial board setup
const initialSetup = [
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"], // White back rank
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"], // White pawns
    [], [], [], [], // Empty rows
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"], // Black pawns
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"], // Black back rank
];

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

        // Add pieces if present in initialSetup
        if (initialSetup[row][col]) {
            cell.textContent = initialSetup[row][col]; // Add Unicode piece
            cell.style.fontSize = "36px"; // Adjust size of pieces
            cell.style.textAlign = "center";
            cell.style.lineHeight = "50px"; // Center pieces vertically
        }

        chessboard.appendChild(cell);
    }
}

}
