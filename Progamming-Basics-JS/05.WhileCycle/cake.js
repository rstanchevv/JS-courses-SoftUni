function cake(input){
    let index = 0;
    let shirochina = Number(input[index]);
    index++
    let dyljina = Number(input[index]);
    index++
    let cakeSize = shirochina * dyljina;
    let cakePieceSize =input[index];
    index++
    while (cakeSize > 0){
        if (cakePieceSize === "STOP"){
            console.log(`${cakeSize} pieces are left.`)
            return;
        }
        cakeSize = (cakeSize - Number(cakePieceSize))
        cakePieceSize = input[index];
        index++
    }
    console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])


