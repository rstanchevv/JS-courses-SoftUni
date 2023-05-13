function solve() {
    class Mage {
        constructor(name){
            this.name = name;
            this.health = 100;
            this.mana = 100;
        }
        cast(spell){
            this.mana--;
            console.log(`${this.name} cast ${spell}`)
        }
    }
    class Fighter{
        constructor(name){
            this.name = name;
            this.health = 100;
            this.stamina = 100;
        }
        fight(){
            this.stamina--;
            console.log(`${this.name} slashes at the foe.`)
        }
    }
    let obj = {
        mage(name){
            let newMage = new Mage(name);
            return newMage;
        },
        fighter(name){
            let newFighter = new Fighter(name);
            return newFighter;
        }
    }
    return obj;
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
