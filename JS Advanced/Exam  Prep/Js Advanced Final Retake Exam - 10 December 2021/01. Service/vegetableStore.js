class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables (vegetables){
        let result = `Successfully added `
        vegetables.forEach(line => {
            let [type, quantity, price] = line.split(" ")
            let findType = this.availableProducts.find(x => x.type === type);
            let indexOfFindType = this.availableProducts.indexOf(findType);
            if (!findType){
                this.availableProducts.push({type, quantity: Number(quantity), price: Number(price)})
            } else {
                this.availableProducts[indexOfFindType].quantity += Number(quantity);
                if (this.availableProducts[indexOfFindType].price < Number(price)){
                    this.availableProducts[indexOfFindType].price = Number(price);
                }
            }  
        })
        for (let i = 0; i < this.availableProducts.length; i ++) {
            if (i === this.availableProducts.length - 1){
                result += `${this.availableProducts[i].type}`
            } else {
                result += `${this.availableProducts[i].type}, `
            }
        }
        return result.trim();
    }
    buyingVegetables (selectedProducts){
        let totalPrice = 0;
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(" ");
            let findType = this.availableProducts.find(x => x.type === type);
            let indexOfFindType = this.availableProducts.indexOf(findType);
            if (indexOfFindType === -1){
                throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (this.availableProducts[indexOfFindType].quantity < quantity){
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += this.availableProducts[indexOfFindType].price * Number(quantity);
            this.availableProducts[indexOfFindType].quantity -= Number(quantity);
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    } 
    rottingVegetable (type, quantity){
        let findType = this.availableProducts.find(x => x.type === type);
        let indexOfFindType = this.availableProducts.indexOf(findType);
        if (indexOfFindType === -1){
            throw new Error(`${type} is not available in the store.`)
        }
        if (Number(quantity) > this.availableProducts[indexOfFindType].quantity){
            this.availableProducts[indexOfFindType].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            this.availableProducts[indexOfFindType].quantity -= Number(quantity);
            return  `Some quantity of the ${type} has been removed.`
        }
    }
    revision (){
        let result = 'Available vegetables:\n'
        let sorted = this.availableProducts.sort((a,b) => a.price - b.price)
        for (const product of sorted) {
            result += `${product.type}-${product.quantity}-$${product.price}\n`
        }
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
;
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"])
vegStore.buyingVegetables(["Okra 1"])
vegStore.buyingVegetables(["Banana 1","Okra 2"])
