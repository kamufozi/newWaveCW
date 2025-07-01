
function connectTheDots(paper) {
    // Step 1: Split into 2D array
    let lines = paper.split('\n');
    let grid = lines.map(line => line.split(''));
    
    // Step 2: Find all letters
    let letters = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] !== ' ') {
                letters.push({
                    letter: grid[row][col],
                    row: row,
                    col: col
                });
            }
        }
    }
    
    // Step 3: Sort letters alphabetically
    letters.sort((a, b) => a.letter.localeCompare(b.letter));
    console.log(letters)
    // Step 4: Draw lines between letters (inline line drawing)
    for (let i = 0; i < letters.length; i++) {
        let start = letters[i];
        let end = letters[(i + 1) % letters.length]; // Connect last to first
        
        // Draw line from start to end
        let currentRow = start.row;
        let currentCol = start.col;
        
        // Mark start position
        grid[currentRow][currentCol] = '*';
        
        // Move step by step towards the end
        while (currentRow !== end.row || currentCol !== end.col) {
            // Move towards target
            if (currentRow < end.row) currentRow++;
            else if (currentRow > end.row) currentRow--;
            
            if (currentCol < end.col) currentCol++;
            else if (currentCol > end.col) currentCol--;
            
            // Mark this position
            grid[currentRow][currentCol] = '*';
        }
    }
    
    // Step 5: Convert back to string
    return grid.map(row => row.join('')).join('\n');
}
    var inp = 
      "           \n" +
      " a       b \n" +
      " e         \n" +
      "           \n" +      
      " d       c \n" +
      "           \n";
console.log(connectTheDots(inp))