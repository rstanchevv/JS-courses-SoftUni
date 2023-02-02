function dungeonestDark(arr){
    let initialHealth = 100;
    let initialCoins = 0;
    let arrToString = arr.toString();
    let split = arrToString.split("|");
    for(let j = 0; j < split.length; j++){
        let room = split[j];
        if (room.includes("chest")){
            let number = '';
            for (let i =6; i <room.length; i++){
                number += room[i];
            }
            number = Number(number);
            initialCoins += number;
            console.log(`You found ${number} coins.`)
        } else if (room.includes("potion")){
            let morethan100 = false;
            let number = '';
            for (let i = 7; i < room.length; i++){
                number += room[i];
            }
            number = Number(number);
            initialHealth += number;
            if (initialHealth > 100){
                morethan100 =  true;
                let realHeal = 100 - (initialHealth - number);
                console.log(`You healed for ${realHeal} hp.`)
                initialHealth = 100;
            }
            if (morethan100 === false){
            console.log(`You healed for ${number} hp.`)
            }
            console.log(`Current health: ${initialHealth} hp.`)
        } else {
            let name = '';
            let number = '';
            let indexOfSpace = room.indexOf(" ");
            for (let i = 0 ; i < indexOfSpace; i++){
                name += room[i];
            }
            for (let i = indexOfSpace + 1; i < room.length; i++){
                number += room[i];
            }
            number = Number(number);
            initialHealth -= number;
            if (initialHealth > 0){
                console.log(`You slayed ${name}.`)
            } else {
                console.log(`You died! Killed by ${name}.`)
                console.log(`Best room: ${j + 1}`)
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`)
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])