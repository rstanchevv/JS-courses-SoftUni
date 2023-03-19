function furniture(arr){
    let command = arr.shift();
    let furnitureArr = [];
    let sum = 0;
    while (command !== "Purchase"){
        let regex = />>(?<furniture>[A-Z]\w+)<<(?<price>\d+[.|\d]+)!(?<quantity>\d+)/g
        let match = regex.exec(command);
        if (match != null){
            furnitureArr.push(match.groups.furniture)
            sum += Number(match.groups.price) * Number(match.groups.quantity)
        }
        command=arr.shift();
    }
    console.log(`Bought furniture:`)
    furnitureArr.length > 0 ? console.log(`${furnitureArr.join("\n")}`) : ''
    console.log(`Total money spend: ${(sum).toFixed(2)}`)
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

)