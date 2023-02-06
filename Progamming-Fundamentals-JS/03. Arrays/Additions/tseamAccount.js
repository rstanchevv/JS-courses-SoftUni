// function tseamAccount(arr) {
//     let index = 1;
//     let gameNames = [];
//     gameNames.push(arr[0]);
//     let gameNamesToString = gameNames.toString();
//     let newArr = gameNamesToString.split(" ");
//     let command = arr[index];
//     index++
//     while (command != "Play!") {
//         if (command.includes("Install")) {
//             let name = ''
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name += command[i];
//             }
//             if (newArr.includes(name)) {
//                 break;
//             } else {
//                 newArr.push(name)
//             }
//         } else if (command.includes("Uninstall")) {
//             let name = '';
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name += command[i];
//             }
//             if (newArr.includes(name)) {
//                 let searchIndex = newArr.indexOf(name);
//                 let splice = newArr.splice(searchIndex, 1)
//             }
//         } else if (command.includes("Update")) {
//             let name = '';
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name += command[i];
//             }
//             if (newArr.includes(name)) {
//                 let searchIndex = newArr.indexOf(name);
//                 let element = newArr.splice(searchIndex, 1)[0];
//                 newArr.splice(newArr.length, 0, element)
//             }
//         } else if (command.includes("Expansion")){
//             let nameOfTheGame = '';
//             let nameOfTheExpansion = '';
//             let searchIndex = command.indexOf("-");
//             for (let i = command.indexOf(" ") + 1;i < searchIndex; i++){
//                 nameOfTheGame += command[i];
//             }
//             for (let i = searchIndex + 1; i < command.length; i++){
//                 nameOfTheExpansion += command[i]
//             }
//             if (newArr.includes(nameOfTheGame)){
//                 let fullName = `${nameOfTheGame}:${nameOfTheExpansion}`;
//                 let searchIndex = newArr.indexOf(nameOfTheGame);
//                 newArr.splice(searchIndex + 1, 0, fullName);
//             }
//         }
//         command = arr[index];
//         index++
//     }
//     console.log(newArr.join(" "))
// }


// function tseamAccount(arr) {
//     let index = 1;
//     let gameNames = [];
//     gameNames.push(arr[0]);
//     let gameNamesToString = gameNames.toString();
//     let newArr = gameNamesToString.split(" ");
//     arr.splice(0,1)
//     let arrToString = arr.toString();
//     let latestArr = arrToString.split(" ")
//     let command = arr[index];
//     index++
//     while (command != "Play!") {
//         let commandForSwitch = '';
//         if (command.includes("Install")){
//         commandForSwitch = "Install"
//         } else if (command.includes("Uninstall")){
//             commandForSwitch = "Uninstall";
//         } else if (command.includes("Update")){
//             commandForSwitch = "Update";
//         } else if (command.includes("Expansion")){
//             commandForSwitch = "Expansion"
//         }
//         switch (commandForSwitch){
//             case "Install":
//             let name = ''
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name += command[i];
//             }
//             if (newArr.includes(name)) {
//                 break;
//             } else {
//                 newArr.push(name)
//             }
//             break;
//             case "Uninstall":
//                 let name1 = '';
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name1 += command[i];
//             }
//             if (newArr.includes(name1)) {
//                 let searchIndex = newArr.indexOf(name1);
//                 let splice = newArr.splice(searchIndex, 1)
//             }
//             break;
//             case "Update":
//                 let name2 = '';
//             for (let i = command.indexOf(" ") + 1; i < command.length; i++) {
//                 name2 += command[i];
//             }
//             if (newArr.includes(name2)) {
//                 let searchIndex = newArr.indexOf(name2);
//                 let element = newArr.splice(searchIndex, 1)[0];
//                 newArr.splice(newArr.length, 0, element)
//             }
//             break;
//             case "Expansion":
//             let nameOfTheGame = '';
//             let nameOfTheExpansion = '';
//             let searchIndex = command.indexOf("-");
//             for (let i = command.indexOf(" ") + 1;i < searchIndex; i++){
//                 nameOfTheGame += command[i];
//             }
//             for (let i = searchIndex + 1; i < command.length; i++){
//                 nameOfTheExpansion += command[i]
//             }
//             if (newArr.includes(nameOfTheGame)){
//                 let fullName = `${nameOfTheGame}:${nameOfTheExpansion}`;
//                 let searchIndex = newArr.indexOf(nameOfTheGame);
//                 newArr.splice(searchIndex + 1, 0, fullName);
//             }
//         }
//         command = arr[index];
//         index++
//     }
//     console.log(newArr.join(" "))
// }

function SteamGames ( arr ) {
    let currentGames = arr[0].split(" ");
    arr.shift();
    let i = 0;
    let indexOfGame = 0;
    let currentGame = "";
 
    while ( arr[i] !== "Play!") {
        let currentCommand = arr[i].split(" ");
        if ( currentCommand[0] === "Install") {
            if ( currentGames.includes(currentCommand[1]) === false ) {
                currentGames.push(currentCommand[1]);
            }
        } else if ( currentCommand[0] === "Uninstall") {
            if ( currentGames.includes(currentCommand[1]) ) {
                currentGame = currentCommand[1];
                indexOfGame = currentGames.indexOf(currentGame);
                currentGames.splice(indexOfGame,1);
            }
        } else if ( currentCommand[0] === "Update") {
            if ( currentGames.includes(currentCommand[1]) ) {
                currentGame = currentCommand[1];
                indexOfGame = currentGames.indexOf(currentGame);
                currentGames.splice(indexOfGame,1);
                currentGames.push(currentGame);
            }
        } 
        else if (currentCommand[0] === "Expansion") {
                currentGame = currentCommand[1].split("-");
                if ( currentGames.includes(currentGame[0])) {
                    indexOfGame = currentGames.indexOf(currentGame[0]);
                    currentGame = currentGame.join(":");
                    currentGames.splice(indexOfGame + 1,0,currentGame);
                }
        }
        i++;
        currentGame = "";
    }
    currentGames = currentGames.join(" ");
    console.log(currentGames);
}
SteamGames(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])