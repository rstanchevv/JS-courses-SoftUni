function adAstra2(text){
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let itemArr = [];
    let match = pattern.exec(text);
    let totalCalories = 0;
    while (match !== null){
        itemArr.push({item: match.groups.item,
        date: match.groups.date,
        calories: match.groups.calories
    })
        totalCalories += Number(match.groups.calories);
        match = pattern.exec(text)
    }
    let totalFoodInDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${totalFoodInDays} days!`);
    for (const item of itemArr) {
        console.log(`Item: ${item.item}, Best before: ${item.date}, Nutrition: ${item.calories}`)
    }
}
adAstra2('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|')