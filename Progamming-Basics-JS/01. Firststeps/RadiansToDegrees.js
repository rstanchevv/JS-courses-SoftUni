function radiansToDegress(input){
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI
    console.log(degrees);
}
radiansToDegress(["3.1416"]);