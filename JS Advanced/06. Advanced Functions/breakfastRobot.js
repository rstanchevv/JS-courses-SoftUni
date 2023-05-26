function solution(){
    let objOfProducts = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
        stock: {
        },
        restock: (microelement, quantity) => {
            if (!obj.stock.hasOwnProperty(microelement)){
                obj.stock[microelement] = 0;
            }
            obj[stock][microelement] += quantity;
            return 'Success';
        },
        prepare: (recipe,quantity) => {
            let [microelement, value] = Object.entries(obj[recipe]);
            value.forEach(x => Number(x) * Number(quantity));
            if (!obj[stock].hasOwnProperty(microelement) || value > Number(obj[stock].microelement)){
                return `Error: not enough ${microelement} in stock`
            }
        }
        }
    return function manager(command){
        [key, value, quantity] = command.split(' ');
        return objOfProducts[key]();
    }
}
let manager = solution();
console.log(manager ('restock flavour 50'))
