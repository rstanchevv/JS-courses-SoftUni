function oldBooks(input){
    let index = 0;
    let searchedBook = input[index];
    index++
    let currentBook = input[index]
    index++
    let bookcounter = 0;
    while (currentBook != searchedBook){
        currentBook = input[index]
        index++
        bookcounter++
        if (currentBook === "No More Books"){
            console.log(`The book you search is not here!`)
            console.log(`You checked ${bookcounter} books.`)
            return;
        }
    }
    console.log(`You checked ${bookcounter} books and found it.`)
}
oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])