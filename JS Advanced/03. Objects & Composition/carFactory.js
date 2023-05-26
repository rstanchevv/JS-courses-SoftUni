function carFactory(obj) {
  let carObj = {};
  carObj.model = obj.model;
  if (obj.power <= 90) {
    carObj.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (obj.power <= 120) {
    carObj.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (obj.power <= 200) {
    carObj.engine = {
      power: 200,
      volume: 3500,
    };
  }
  carObj.carriage = {
    type: obj.carriage,
    color: obj.color,
  };

  if (obj.wheelsize % 2 === 0) {
    obj.wheelsize -= 1;
  }
  carObj.wheels = new Array(4).fill(obj.wheelsize);
  return carObj;
}
carFactory({
  model: "Brichka",
  power: 65,
  color: "white",
  carriage: "hatchback",
  wheelsize: 16,
});
