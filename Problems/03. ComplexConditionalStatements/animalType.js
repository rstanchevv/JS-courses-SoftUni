function animaltype(input){
let animaltype = input[0];
switch (animaltype){
    case "dog":
        console.log(`mammal`);
        break;
    case "crocodile":
    case "tortoise":
    case "snake":
        console.log(`reptile`);
        break;
    default: console.log(`unknown`)
}
}
animaltype(["snake"])