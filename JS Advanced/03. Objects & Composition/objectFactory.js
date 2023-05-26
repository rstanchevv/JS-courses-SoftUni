function factory(library, orders) {
  let newArr = [];
  for (const order of orders) {
    let newObj = {};
    let key = Object.keys(order.template);
    newObj[key] = order.template[key];
    for (const fnc of order.parts) {
      newObj[fnc] = library[fnc];
    }
    newArr.push(newObj);
  }
  return newArr;
}
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },

  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },

  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },

    parts: ["print"],
  },

  {
    template: { name: "Initech Scanner" },

    parts: ["scan"],
  },

  {
    template: { name: "ComTron Copier" },

    parts: ["scan", "print"],
  },

  {
    template: { name: "BoomBox Stereo" },

    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products[2]);
