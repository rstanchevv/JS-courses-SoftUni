function heroicInventory(arr){
    let newArr = [];
    for (const hero of arr) {
        let [name, level, items] = hero.split(" / ");
        items = items ? items.split(", ") : [];
        let heroObj = {
            name,
            level: Number(level),
            items
        }
        newArr.push(heroObj)
    }
    return JSON.stringify(newArr)
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']))