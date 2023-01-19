function towelSort(matrix = []) {
    let result = []

    for (let i = 0; i < matrix.length; i++){
        if (i % 2 == 0) 
        {
            for (let a = 0; a < matrix[i].length; a++) result.push(matrix[i][a])
        }
        else 
        {
            const matrixReverse = matrix[i].reverse()
            for (let a = 0; a < matrix[i].length; a++) result.push(matrixReverse[a])
        }
    }
    return result
}
