class Storage {
    constructor(capacity){
        this.capacity = capacity;
        this.storage = []
    }
    addProduct(product){
        this.storage.push(product)
        this.capacity -= product.quantity;
    }
    get totalCost(){
        return this.storage.reduce((sum, el) => sum += el.price * el.quantity,0)
    }
    getProducts(){
        let json = [];
        for (let obj of this.storage){            
            json.push(JSON.stringify(obj))
        }
        return json.join(`\n`)
    }
}

let productOne = {name: 'Cucamber',

price: 1.50, quantity: 15};

let productTwo = {name: 'Tomato',

price: 0.90, quantity: 25};

let productThree = {name: 'Bread',

price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

console.log(storage.totalCost);