function paintinghouse(input){
    let visochinaNakyshtata = Number(input[0]);
    let dyljinaStranichnaStena = Number(input[1]);
    let visochinaNaTriygylnaStena = Number(input[2]);

    let prednastranaVrata = 1.2 * 2;
    let stranichniStraniprozorci = (1.5 * 1.5) + (1.5 * 1.5)

    let licenaPrednaiZadnastrana = (visochinaNakyshtata * visochinaNakyshtata) + (visochinaNakyshtata * visochinaNakyshtata);
    let licenaStranichniSteni = (visochinaNakyshtata*dyljinaStranichnaStena) + (visochinaNakyshtata*dyljinaStranichnaStena);

    let kvZaZelenaBoya = licenaPrednaiZadnastrana + licenaStranichniSteni - (prednastranaVrata + stranichniStraniprozorci);
    let zelenaBoya = kvZaZelenaBoya / 3.4
    let licenaPokrivTriygylnici = (visochinaNakyshtata * visochinaNaTriygylnaStena) / 2 + (visochinaNakyshtata * visochinaNaTriygylnaStena) / 2;
    let kvZaChervenaBoya = licenaStranichniSteni + licenaPokrivTriygylnici;
    let chervenaBoya = kvZaChervenaBoya / 4.3





    console.log(zelenaBoya.toFixed(2))
    console.log(chervenaBoya.toFixed(2))





}
paintinghouse([6, 10, 5.2])