function adAstra(arr){
    let objArr = [];
    let currentString = arr[0];
    let regex = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let match = regex.exec(currentString);
    let totalCalories = 0;
    while (match != null){
        objArr.push({item: match[2], day: match[3], cal: match[4]})
        totalCalories += Number(match[4]);
        match = regex.exec(currentString);
    }
    let foodForDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${foodForDays} days!`);
    for (const item of objArr) {
        console.log(`Item: ${item.item}, Best before: ${item.day}, Nutrition: ${item.cal}`)
    }
}
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
    ]
    )