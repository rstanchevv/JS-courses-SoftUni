function heroesOfCodeAndLogic(arr){
    let heroesObj = {};
    let numberOfHeroes = arr.shift();
    for (let i = 0; i < numberOfHeroes; i++){
        let [heroName, HP, MP] = arr[i].split(" ");
        heroesObj[heroName] = {
            HP: Number(HP),
            MP: Number(MP),
        }
    }
    let commands = arr.splice(numberOfHeroes);
    let command = commands.shift();
    while (command !== "End"){
        let commandSplit = command.split(" - ");
        switch(commandSplit[0]){
            case "CastSpell":
                let [heroName, MPNeeded, spellName] = commandSplit.slice(1);
                if (heroesObj[heroName].MP >= MPNeeded){
                    heroesObj[heroName].MP -= Number(MPNeeded)
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].MP} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let [takeDamageHero, amountDamage, attacker] = commandSplit.slice(1);
                heroesObj[takeDamageHero].HP -= Number(amountDamage);
                if (heroesObj[takeDamageHero].HP > 0){
                    console.log(`${takeDamageHero} was hit for ${amountDamage} HP by ${attacker} and now has ${heroesObj[takeDamageHero].HP} HP left!`);
                } else {
                    delete heroesObj[takeDamageHero];
                    console.log(`${takeDamageHero} has been killed by ${attacker}!`);
                }
                break;
            case "Heal":
                let [healHeroName, amount] = commandSplit.slice(1);
                let currentHeal = heroesObj[healHeroName].HP;
                heroesObj[healHeroName].HP += Number(amount);
                if (heroesObj[healHeroName].HP > 100){
                    heroesObj[healHeroName].HP = 100;
                    console.log(`${healHeroName} healed for ${100 - currentHeal} HP!`)
                } else {
                    console.log(`${healHeroName} healed for ${amount} HP!`)
                }
                break;
            case "Recharge":
                let [rechargeHeroName, rechargeAmount] = commandSplit.slice(1);
                let currentCharge = heroesObj[rechargeHeroName].MP;
                heroesObj[rechargeHeroName].MP += Number(rechargeAmount);
                if (heroesObj[rechargeHeroName].MP > 200){
                    heroesObj[rechargeHeroName].MP = 200;
                    console.log(`${rechargeHeroName} recharged for ${200 - currentCharge} MP!`)
                } else {
                    console.log(`${rechargeHeroName} recharged for ${rechargeAmount} MP!`)
                }
                break;
        }
        command = commands.shift();
    }
    let objectKeys = Object.keys(heroesObj);
    for (const hero of objectKeys) {
        console.log(hero);
        console.log(`  HP: ${heroesObj[hero].HP}`)
        console.log(`  MP: ${heroesObj[hero].MP}`)
    }
}
heroesOfCodeAndLogic(['4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'
])