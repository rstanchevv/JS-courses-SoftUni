class OnlineShop {
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products =[];
        this.sales=[];
    }
    loadingStore(product, quantity, spaceRequired){
        if (this.warehouseSpace < spaceRequired){
            throw new Error(`Not enough space in the warehouse.`)
        }
        this.products.push({product, quantity});
        this.warehouseSpace--
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity) {
        let findProduct = this.products.find(x => x.product === product);
        let indexOfProduct = this.products.indexOf(findProduct);
        if (!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if (minimalQuantity <= this.products[indexOfProduct].quantity){
            return `You have enough from product ${product}.`
        }
        if (minimalQuantity > this.products[indexOfProduct].quantity){
            let difference = minimalQuantity - this.products[indexOfProduct].quantity;
            this.products[indexOfProduct].quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }
    sellProduct(product) {
        let findProduct = this.products.find(x => x.product === product);
        let indexOfProduct = this.products.indexOf(findProduct);
        if (!findProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        this.products[indexOfProduct].quantity--;
        if (this.products[indexOfProduct].quantity === 0){
            this.products.splice(indexOfProduct,1)
        }
        let copyOfObject = JSON.parse(JSON.stringify(this.products[indexOfProduct]));
        this.sales.push(copyOfObject);
        let indexOfProductInSales = this.sales.indexOf(copyOfObject);
        delete this.sales[indexOfProductInSales].quantity;
        this.sales[indexOfProductInSales][`{1}`] = ''

        return `The ${product} has been successfully sold.`
    }
    revision() {
        let result = ''
        if (this.sales.length < 1){
            throw new Error (`There are no sales today!`);
        }
        result += `You sold ${this.sales.length} products today!\n`
        result += `Products in the warehouse:\n`
        for (const product of this.products) {
            result += `${product.product}-${product.quantity} more left\n`
        }
        return result.trim()
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



