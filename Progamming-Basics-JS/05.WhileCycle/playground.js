function strings(input){
    let index = 0;
    let text = input[index];
    index++;

    while (text !== "Stop"){
        console.log(text)
        text = input[index];
        index++
    }
}
strings(["Nakov", "Softuni", "Sofia", "Bulgaria", "Sometext", "Stop", "AfterStop"])