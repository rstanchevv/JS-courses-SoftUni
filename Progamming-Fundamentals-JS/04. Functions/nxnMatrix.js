function nxnMatrix(n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < n; i++) {
            result += `${n} `
        }
        result += '\n'
    }
    console.log(result)
}
nxnMatrix(7)