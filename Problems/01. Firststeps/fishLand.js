function fishland(input){
    let cenaskumriya = Number(input[0]);
    let cenacaca = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudcena = (0.60 * cenaskumriya) + cenaskumriya;
    let safridcena = (0.80 * cenacaca) + cenacaca;
    let midicena = Number(7.50);

    let razhod = (palamudKg * palamudcena) + (safridKg * safridcena) + (midiKg * midicena);
    console.log(razhod.toFixed(2));
    




}
fishland([6.90, 4.20, 1.5, 2.5, 1])