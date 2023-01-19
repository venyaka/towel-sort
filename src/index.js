module.exports = function towelSort(matrix) {
    let result = []
    let n = 0

    for (let i = 0; i < matrix.length; i++){
        console.log(matrix[i].length)
        if (matrix[i].length == 0) i = i + 1
        if (n % 2 == 0) 
        {
            console.log(matrix[i])
            for (let a = 0; a < matrix[i].length; a++) result.push(matrix[i][a])
        }
        else 
        {
            const matrixReverse = matrix[i].reverse()
            console.log(matrixReverse)
            for (let a = 0; a < matrix[i].length; a++) result.push(matrixReverse[a])
        }
        n += 1
    }
    return result
}
