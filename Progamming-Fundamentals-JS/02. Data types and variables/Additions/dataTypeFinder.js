function dataTypeFinder(input){
    let type = '';
    let index = 0;
    let currentInput = input[index];
    index++
    while (currentInput != "END"){
        let typeOfCurrentInput = typeof(currentInput);
        switch (typeOfCurrentInput){
            case "number":
                if (Number(currentInput) % 1 === 0){
                    type = "integer";
                } else {
                    type = "floating"
                }
                break;
            case "string":
                if (currentInput === "true" || currentInput === "false"){
                    type = "boolean"
                } else if (currentInput.length === 1){
                    type = "character";
                } else {
                    type = "string";
                }
                break;
        }
        console.log(`${currentInput} is ${type} type.`);
        currentInput = input[index];
        index++
    }
}
dataTypeFinder(["a",
    "asd",
    5,
    "END"
    
    ])