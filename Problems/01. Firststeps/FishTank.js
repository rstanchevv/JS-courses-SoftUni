function fishtank(input){
    let dyljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let visochina = Number(input[2]);
    let procent = Number(input[3]) / 100;
    let obem = dyljina * shirochina * visochina;
    let obemvLityr = obem / 1000;
    let zaetObem = obemvLityr - (obemvLityr * procent);
    console.log(zaetObem)

}
fishtank(["85", "75", "47", "17"])