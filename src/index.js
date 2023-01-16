module.exports = function towelSort(matrix) {
    let result = []

    for (let i = 0; i < matrix.length; i++){
        if(i % 2 == 0) result.push(matrix[i].toString())
        else result.push(matrix[i].reverse().toString())
    }
    return result
}
