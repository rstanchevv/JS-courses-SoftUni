function muOnline(str){
    let initialHealth = 100;
    let initialBitcoin = 0;
    let room = 0;
    let roomArr = str.split("|");
    for(let i = 0; i < roomArr.length; i++){
        room++
        let roomSplit = roomArr[i].split(" ");
        switch(roomSplit[0]){
            case "potion":
                let temp = initialHealth;
                initialHealth += Number(roomSplit[1]);
                if (initialHealth > 100){
                    initialHealth = 100;
                    console.log(`You healed for ${initialHealth - temp} hp.`);
                } else{
                    console.log(`You healed for ${Number(roomSplit[1])} hp.`)
                }
                console.log(`Current health: ${initialHealth} hp.`);
                break;
            case "chest":
                initialBitcoin += Number(roomSplit[1]);
                console.log(`You found ${Number(roomSplit[1])} bitcoins.`);
                break;
            default:
                initialHealth -= Number(roomSplit[1]);
                if (initialHealth > 0){
                    console.log(`You slayed ${roomSplit[0]}.`)
                } else {
                    console.log(`You died! Killed by ${roomSplit[0]}.`)
                    console.log(`Best room: ${room}`);
                    return;
                }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${initialBitcoin}`);
    console.log(`Health: ${initialHealth}`)
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")