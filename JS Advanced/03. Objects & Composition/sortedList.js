function createSortedList(){
    let collection = [];
    let result = {
        size: 0,
        add(a){
            collection.push(a);
            this.size++
            collection.sort((a,b) => a - b);
        },
        remove(index){
            if (index >= 0 && index < collection.length){
            collection.splice(index, 1);
            this.size--;
            collection.sort((a,b) => a -b);
            }
        },
        get(index){
            if (index >= 0 && index < collection.length){
                return collection[index];
            }
        }
    }
    return result;
}
let list = createSortedList();
list.add(12);
list.add(7);
list.add(6);
console.log(list.get(0)); 
console.log(list.get(2));
console.log(list.size)
