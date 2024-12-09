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
}
