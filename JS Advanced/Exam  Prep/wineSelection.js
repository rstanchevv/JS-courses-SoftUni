class WineSelection {
    constructor(space){
        this.space =  space,
        this.wines = [],
        this.bill = 0
    }
    reserveABottle (wineName, wineType, price){
        if (this.space === 0){
            throw new Error(`Not enough space in the cellar.`)
        }
        this.wines.push({wineName, wineType, price, paid: false,});
        this.space -= 1
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let foundWine = this.wines.find((x) => x.wineName === wineName)
        let indexOfFoundWine = this.wines.indexOf(foundWine);
        if (!foundWine){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if (this.wines[indexOfFoundWine].paid === true){
            throw new Error(`${wineName} has already been paid.`)
        }
        this.wines[indexOfFoundWine].paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        let foundWine = this.wines.find((x) => x.wineName === wineName)
        let indexOfFoundWine = this.wines.indexOf(foundWine);
        if (!foundWine){
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if (this.wines[indexOfFoundWine].paid === false){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        this.wines.splice(indexOfFoundWine,1);
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType){
        let result = '';
        let sorted
        if (wineType === undefined){
            sorted = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))
            result += `You have space for ${this.space} bottles more.\n`
            result += `You paid ${this.bill}$ for the wine.\n`
            for (const wine of sorted) {
                let isPaid = 'Not Paid.'
                if (wine.paid === true){
                    isPaid = 'Has Paid.' 
                }
                result += `${wine.wineName} > ${wine.wineType} - ${isPaid}\n`
            }
            return result.trim();
        } else {
            let foundWine = this.wines.find((a) => a.wineType === wineType);
            if (!foundWine){
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                let isPaid = 'Not Paid.'
                if (foundWine.paid === true){
                    isPaid = 'Has Paid.' 
                }
                return `${foundWine.wineName} > ${foundWine.wineType} - ${isPaid}`
            }
        }
    }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
