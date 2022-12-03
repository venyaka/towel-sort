function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length; i++) {               // realisation '())('
        if (str.includes(bracketsConfig[i][0] + bracketsConfig[i][1])) {
            let clearStr = str.replace([bracketsConfig[i][0] + bracketsConfig[i][1]], '')
            if (clearStr[0] == '}' || clearStr[0] == ')' || clearStr[0] == ']' || clearStr[-1] == '{' || clearStr[-1] == '(' || clearStr[-1] == '[' || str.length % 2 != 0) return false
        }
        else {
            let clearStr2 = str                                     // realisation '([{}])':
            for (let b = 0; b <= str.length; b++) {
                if (bracketsConfig.length == 2) clearStr2 = clearStr2.replace([bracketsConfig[0][0] + bracketsConfig[0][1]], '').replace([bracketsConfig[1][0] + bracketsConfig[1][1]], '')
                else if (bracketsConfig.length == 3) clearStr2 = clearStr2.replace([bracketsConfig[0][0] + bracketsConfig[0][1]], '').replace([bracketsConfig[1][0] + bracketsConfig[1][1]], '').replace([bracketsConfig[2][0] + bracketsConfig[2][1]], '')
                if (clearStr2 == '') return true
            }
            return false
        }
        return true
    }
    return true
}
