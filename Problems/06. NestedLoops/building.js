function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1])
    let result = "";
    for (let i = floor; i >= 1; i--) {
        for (let n = 0; n < rooms; n++) {
            if (i === floor) {
                if (n === rooms -1){
                    result = result + "L" + i + n;
                } else{
                    result = result + "L" + i + n + " ";
                }
            }
            if (i % 2 === 0 && i !== floor) {
                if (n === rooms -1){
                    result = result + "O" + i + n;
                } else {
                    result = result + "O" + i + n + " ";
                }
            } else if (i % 2 !== 0 && i !== floor){
                if (n === rooms -1){
                    result = result + "A" + i + n;
                } else {
                    result = result + "A" + i + n + " ";
                }
            }
        }
        console.log(result)
        result = "";
    }
}
    building(["6", "4"])