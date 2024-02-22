
// const matrix = [];
// const direction = ["R","D","L","U"];
// let n = 4;
// let currentPos = [0,0];
// let count = 1;
// let colValue = "";
// for(let index = 0;index < n*n;index++){
//     if(currentPos[1] !== n-1){
//         colValue += count + " ";
//         currentPos[1]++;
//         count++;
//     }
//     matrix.push(colValue);
// }
// console.log(matrix)    


const createSpiralMatrix = (n) => {
    const matrix = [];
    let position = [0, 0];
    let currentDirection = "R";

    for (let count = 1; count <= n * n; count++) {
        let [row, col] = position;
        matrix[row] = matrix[row] || [];
        matrix[row][col] = count;

        if (currentDirection === "R") {
            if (col === n - 1 || matrix[row][col + 1]) {
                currentDirection = "D";
                position[0] += 1;
                continue;
            }

            position[1] += 1;
        }
        if (currentDirection === "L") {
            if (col === 0 || matrix[row][col - 1]) {
                currentDirection = "U";
                position[0] -= 1;
                continue;
            }

            position[1] -= 1;
        }

        if (currentDirection === "D") {
            if (row === n - 1 || (matrix[row + 1] && matrix[row + 1][col])) {
                currentDirection = "L";
                position[1] += 1;
                continue;
            }

            position[0] += 1;
        }

        if (currentDirection === "U") {
            if (row === 0 || (matrix[row - 1] && matrix[row - 1][col])) {
                currentDirection = "R";
                position[1] += 1;
                continue;
            }

            position[0] -= 1;
        }
    }
    return matrix;
}
createSpiralMatrix(4)

