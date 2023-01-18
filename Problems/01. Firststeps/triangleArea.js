function triangleArea(input){
    let strana = Number(input[0]);
    let visochina = Number(input[1]);
    let area = (strana * visochina) / 2;
    console.log(area.toFixed(2));
}
triangleArea([15,35])