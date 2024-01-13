function solve(arr: string[]) {
    const objOfProducts: { [key: string]: { city: string; price: number } } = {};
  
    for (const entry of arr) {
      const splitElement = entry.split("|");
      let city: string = splitElement[0];
      let product: string = splitElement[1];
      let price: number = Number(splitElement[2]);
  
      if (objOfProducts.hasOwnProperty(product)) {
        if (price < objOfProducts[product].price) {
          objOfProducts[product].price = price;
          continue;
        }
      } else {
        objOfProducts[product] = {
          city,
          price,
        };
      }
    }
    for (const product of Object.keys(objOfProducts)) {
      console.log(
        `${product} -> ${objOfProducts[product].price} (${objOfProducts[product].city})`
      );
    }
  }
  solve([
    "Sample Town | Sample Product | 1000",
  
    "Sample Town | Orange | 2",
  
    "Sample Town | Peach | 1",
  
    "Sofia | Orange | 3",
  
    "Sofia | Peach | 2",
  
    "New York | Sample Product | 1000.1",
  
    "New York | Burger | 10",
  ]);