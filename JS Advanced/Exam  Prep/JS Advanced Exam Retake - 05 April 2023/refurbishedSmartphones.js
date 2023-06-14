class RefurbishedSmartphones{
    constructor(retailer){
        this.retailer=retailer;
        this.availableSmartphones=[];
        this.soldSmartphones=[];
        this.revenue=0;
    }
    addSmartphone (model, storage, price, condition){
        if (model === '' || storage < 0 || price < 0 || condition.length === 0){
            throw new Error(`Invalid smartphone!`)
        }
        this.availableSmartphones.push({model, storage, price, condition});
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }
    sellSmartphone (model, desiredStorage){
        if(!this.availableSmartphones.find(x=>x.model===model)){
            throw new Error(`${model} was not found!`);
        }else{
            let currPhone=this.availableSmartphones.find(x=>x.model===model);
            let index=this.availableSmartphones.indexOf(currPhone);
            let diff=Math.abs(currPhone.storage-desiredStorage);
            let soldPrice;
            if(currPhone.storage>=desiredStorage){
                soldPrice=currPhone.price;
            }else if(diff<=128){
                soldPrice=(currPhone.price)*0.9;
            }else{
                soldPrice=(currPhone.price)*0.8;
            }
            this.soldSmartphones.push({model,storage:currPhone.storage,soldPrice});
            this.revenue+=soldPrice;
            this.availableSmartphones.splice(index,1);
            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        }
    }
    upgradePhones () {
        if(this.availableSmartphones.length===0){
            throw new Error('There are no available smartphones!')
        }else{
            this.availableSmartphones.map(x=>x.storage*=2);
            let result=`Upgraded Smartphones:\n`
            this.availableSmartphones.map(x=>result+=`${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$\n`)
            return result.trim()
        }
    }
    salesJournal (criteria){
        let sorted;
        if(criteria==='storage'){
           sorted= this.soldSmartphones.sort((a,b)=>b.storage-a.storage);
 
        }else if(criteria==='model'){
            sorted= this.soldSmartphones.sort((a,b)=>a.model.localeCompare(b.model));
        }else{
            throw new Error('Invalid criteria!');
        }
        // let income=sorted.reduce((a,x)=>a+x.soldPrice,0);
        let result=`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;
        result+=`${sorted.length} smartphones sold:\n`;
        sorted.map(x=>result+=`${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$\n`)
    
        return result.trim()
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));



