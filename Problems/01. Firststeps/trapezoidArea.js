function trapezoidArea(input){

    let osnova1 = Number(input[0]);
    let osnova2 = Number(input[1]);
    let visochina = Number(input[2]);
    let area = ((osnova1 + osnova2) * visochina) / 2;
    console.log(area.toFixed(2));


}
trapezoidArea([8,13,7]);