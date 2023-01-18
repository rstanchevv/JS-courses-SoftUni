function shoppingList(input){
    let index = 0;
    let urgent = "Urgent";
    let unnecessary = "Unnecessary";
    let correct = "Correct";
    let rearrange = "Rearrange"
    const initialproductArray = [input];
    const newProductArray = [];
    index++
    let command = input[index];
    index++
    while (command !== "Go Shopping!"){
        if (command.includes(urgent)){
            let currentCommand = command.slice(7, command.length);
            if (newProductArray.includes(currentCommand)){
                continue;
            }
            newProductArray.push(currentCommand);
        } else if (command.includes(unnecessary)){
            let currentCommand = (command.slice(12, command.length).trim());
            if(newProductArray.includes(currentCommand)){
                let productPosition = newProductArray.indexOf(currentCommand,0);
                newProductArray.splice(productPosition,productPosition);
                console.log(newProductArray);
                
                
            }
        }
        command = input[index];
        index++
    }
}
shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Urgent Milk',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
  ])