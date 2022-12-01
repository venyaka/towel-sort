function towelSort(massive) {
    result = []

    for (let i = 0; i < massive.length; i++){
        if(i % 2 == 0) result.push(massive[i].toString())
        else result.push(massive[i].reverse().toString())
    }
    return result
}
