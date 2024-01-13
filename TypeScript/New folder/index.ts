/// <reference path="exports.ts" />

interface Client {
    customerName: string;
    visited: boolean;
}

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit

    constructor(placesToVisit: Client[] ){
        this.placesToVisit = placesToVisit
    }
    newCustomer(customerName: string, visited: boolean = false): void  {
        const existingUser = this.placesToVisit.find(el => el.customerName == customerName);
        if (existingUser){
            throw new Error(`${customerName} is already a customer of yours!`)
        } else {
            this.placesToVisit.push({customerName: customerName, visited: visited})
        }
    }
    visitCustomer(customerName: string): string {
        const existingUser = this.placesToVisit.find(el => el.customerName == customerName);
        if (!existingUser) {
            throw new Error (`${customerName} is not your customer.`)
        } else {
            existingUser.visited = true;
            return `${customerName} just became your client.`
        }
    }
    showCustomers(): string {
        const finalString = [];

        for (const customer of this.placesToVisit) {
            finalString.push(`${customer.customerName} -> ${customer.visited}`);
        }

        return finalString.join('\n')
    }
}

let courier = new

Courier([{ customerName: 'DHL',

visited: false }]);

courier.newCustomer('Speedy');

courier.newCustomer('MTM');

courier.newCustomer('TipTop');

courier.visitCustomer('DHL');

courier.visitCustomer('MTM');

courier.visitCustomer('MTM');

console.log(courier.showCustomers())