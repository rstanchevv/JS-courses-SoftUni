function number(input) {
    let number = Number(input[0]);

    for (let n = 1; n <= number; n += 3) {
        console.log(n)
    }
}
number(["10"])