function moving(input){
    let index = 0;
    let shirochina = Number(input[index]);
    index++;
    let dyljina = Number(input[index]);
    index++
    let visochina = Number(input[index]);
    index++
    let space = shirochina * dyljina * visochina;
    let box = input[index];
    index++;
    while (box != "Done"){
    space -= Number(box);
    box = input[index];
    index++
        if (space < 0){
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`)
        return;
        }
    }
    console.log(`${space} Cubic meters left.`)
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

