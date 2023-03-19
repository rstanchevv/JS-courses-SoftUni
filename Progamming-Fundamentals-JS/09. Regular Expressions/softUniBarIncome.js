function softUniBarIncome(arr){
    let regex = /%(?<customer>[A-Z][a-z]+)%[^\||,|\%|\.]*<(?<product>\w+)>[^\||,|\%|\.]*\|(?<count>\d+)\|[^\||,|\%|\.|\d]*(?<price>\d[\.|\d]+)\$/g;
    let command = arr.shift();
    let totalIncome = 0;
    while (command !== "end of shift"){
        let match = regex.exec(command);
        while (match != null){
            let name = match.groups.customer;
            let product = match.groups.product;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);
            totalIncome += count * price;
            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`)
            match = regex.exec(command);
        }
        command = arr.shift()
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)