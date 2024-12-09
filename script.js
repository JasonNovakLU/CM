// Initial chessboard setup with pieces
const initialSetup = [
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
];

// Image paths for the pieces
const pieceImages = {
    black: {
        king: "images/black_king.png",
        queen: "images/black_queen.png",
        rook: "images/black_rook.png",
        bishop: "images/black_bishop.png",
        knight: "images/black_knight.png",
        pawn: "images/black_pawn.png",
    },
    white: {
        king: "images/white_king.png",
        queen: "images/white_queen.png",
        rook: "images/white_rook.png",
        bishop: "images/white_bishop.png",
        knight: "images/white_knight.png",
        pawn: "images/white_pawn.png",
    },
};

// Function to create the chessboard
function createBoard() {
    const board = document.getElementById('chessboard'); // Get the chessboard container

    // Loop through each row
    for (let row = 0; row < 8; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row'); // Add row class for styling

        // Loop through each column
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell'); // Add cell class for styling

            // Determine piece placement from initialSetup
            const piece = initialSetup[row][col];
            if (piece) {
                // Determine the color of the piece (White if row < 2, Black if row >= 6)
                const color = row < 2 ? 'white' : 'black';

                // Create an image element for the piece
                const img = document.createElement('img');
                img.src = pieceImages[color][piece]; // Set the image source to the piece image
                img.alt = `${color} ${piece}`; // Set the alt text for accessibility
                img.style.width = '100%'; // Adjust image to fit the cell width
                img.style.height = '100%'; // Adjust image to fit the cell height
                cell.appendChild(img); // Append image to the cell
            }

            rowElement.appendChild(cell); // Append cell to the row
        }
        board.appendChild(rowElement); // Append row to the chessboard container
    }
}

// Call the createBoard function when the page is loaded
window.onload = createBoard;
