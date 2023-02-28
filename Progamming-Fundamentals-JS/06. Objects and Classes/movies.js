function movies(commands) {
    let res = [];

    for (let command of commands) {
        if (command.includes("addMovie ")) {
            let name = command.split("addMovie ")[1];
            res.push({name})
        } else if (command.includes("directedBy")) {
            let [movieName, directors] = command.split(" directedBy ");
            let findMovieObject = res.find(movie => movie.name === movieName);
            if (findMovieObject){
                findMovieObject.director = directors;
            }
        } else if (command.includes("onDate")) {
            let [movieName, date] = command.split(" onDate ");
            let findMovieObject = res.find(movie => movie.name === movieName);
            if (findMovieObject){
                findMovieObject.date = date;
            }
        }
    }
    for (let movies of res) {
        if (Object.keys(movies).length === 3){
            console.log(JSON.stringify(movies));
        }
    }
}
movies([

'addMovie The Avengers',

'addMovie Superman',

'The Avengers directedBy Anthony Russo',

'The Avengers onDate 30.07.2010',

'Captain America onDate 30.07.2010',

'Captain America directedBy Joe Russo'

])
