function solve(matrix){
    for(let row = 0; row < matrix.length; row++){
        let el = matrix[row];
        let sum = 0;

        for(let col = 0; col < matrix[row].length; col++){
            let el = matrix[row][col];
            sum += el;
        }
    }

    for(let col = 0; col < matrix[0].length; col++){
        let sum = 0;
        for(let row = 0; row < matrix.length; row++){
            let el = matrix[row][col];
            sum += el;
        }
    }
}
console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));