function squareOfStars(num){
    let output = "";
    for (let i = 0; i < num; i++){
        for (let k = 0; k < num; k++){
            output += "* ";
        }
        output += "\n"
    }
    console.log(output.trim())
}
squareOfStars(7)