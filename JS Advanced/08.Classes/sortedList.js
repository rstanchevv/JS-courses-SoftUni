class List {
    constructor(){
        this.numbers = [];
        this.size = 0;
    }
    add(element){
        this.numbers.push(element);
        this.numbers.sort((a,b) => a - b)
        this.size++
    }
    remove(index){
        if (index < 0 || index > this.numbers.length - 1){
            throw new RangeError(`invalid index`)
        }
        this.numbers.splice(index,1)
        this.numbers.sort((a,b) => a - b)
        this.size--
    }
    get(index){
        if (index < 0 || index > this.numbers.length - 1){
            throw new RangeError(`invalid index`)
        }
        return this.numbers[index]
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
