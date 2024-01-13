import {Cloth} from './Cloth'

export class Magazine {
    type: string;
    capacity: number;
    clothes: Cloth[]

    constructor(type: string, capacity: number){
        this.type = type;
        this.capacity = capacity;
        this.clothes = []
    }

    addCloth(cloth: Cloth): void{
        if (this.clothes.length < this.capacity){
            this.clothes.push(cloth)
        }
    }
    removeCloth(color: string):boolean {
        const foundCloth: Cloth | undefined = this.clothes.find(x => x.color == color);
        if (foundCloth){
            const index: number = this.clothes.indexOf(foundCloth);
            this.clothes.splice(index, 1)
            return true;
        } else {
            return false;
        }
    }
    getSmallestCloth(): Cloth{
        return this.clothes.reduce((prev, curr) => prev.size < curr.size ? prev : curr);
    }
    getCloth(color: string): Cloth | undefined{
        return this.clothes.find(cloth => cloth.color == color)
    }
    getClothCount():number{
        return this.clothes.length;
    }
    report():string{
        let string = `${this.type} magazine contains:\n`
        const sortedArray = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedArray) {
            string += `${cloth}\n`
        }
        return string.trim()
    }
}