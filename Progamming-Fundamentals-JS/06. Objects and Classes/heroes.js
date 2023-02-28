function heroes(heroInfo){
    let res = [];

    for (let hero of heroInfo){
        let myObj = {};
        let [name, level, items] = hero.split(" / ");
        myObj.name = name;
        myObj.level = level;
        myObj.items = items;
        res.push(myObj)
    }
    res.sort((aLevel, bLevel) => aLevel.level - bLevel.level);
    for (let hero of res){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }
}
heroes([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])