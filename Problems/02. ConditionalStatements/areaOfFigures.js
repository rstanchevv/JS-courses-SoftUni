function areaOfFigures(input){
    let figuretype = input[0];

    if (figuretype === "square"){
        let a = Number(input[1]);
        console.log((a * a).toFixed(3));
    } else if (figuretype === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let lice = a * b;
        console.log(lice.toFixed(3));
    } else if (figuretype === "circle"){
        let r = Number(input[1]);
        let lice = r * r * Math.PI
        console.log(lice.toFixed(3));
    } else if (figuretype === "triangle"){
        let a = Number(input[1]);
        let h = Number(input[2]);
        let lice = (a * h) / 2;
        console.log(lice.toFixed(3));

    }
}
areaOfFigures(["circle", "6"])