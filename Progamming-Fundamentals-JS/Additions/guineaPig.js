function guineaPig(input){
    let foodKgs = Number(input[0]) * 1000;
    let hayKgs = Number(input[1]) * 1000;
    let coverKgs = Number(input[2]) * 1000;
    let weightKgs = Number(input[3]) * 1000;
    for (let i = 1; i <= 30; i++){
        foodKgs -= 300;
        if (foodKgs <= 0 || hayKgs <= 0 || coverKgs <= 0){
            console.log(`Merry must go to the pet store!`);
            return;
        }
        if (i % 6 === 0){
            hayKgs -= 0.05 * foodKgs;
            coverKgs -= (1 / 3) * weightKgs;
        } else if (i % 3 === 0){
            coverKgs -= (1 / 3) * weightKgs;
        } else if (i % 2 === 0){
            hayKgs -= 0.05 * foodKgs;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodKgs / 1000).toFixed(2)}, Hay: ${(hayKgs / 1000).toFixed(2)}, Cover: ${(coverKgs / 1000).toFixed(2)}.`)
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])




// function guineaPig(input){
//     let day = 1;
//     let foodKgs = Number(input[0]) * 1000;
//     let hayKgs = Number(input[1]) * 1000;
//     let coverKgs = Number(input[2]) * 1000;
//     let weightKgs = Number(input[3]) * 1000;
//     while (day <= 30){
//         if (foodKgs < 0 || hayKgs < 0 || coverKgs < 0){
//             console.log(`Merry must go to the pet store!`);
//             return;
//         }
//         if (day % 3 === 0){
//             foodKgs -= 300;
//             coverKgs -= (1 / 3) * weightKgs;
//             if (day % 2 ===0){
//                 foodKgs -= 300;
//                 hayKgs -= 0.05 * foodKgs;
//             }
//         } else if (day % 2 === 0){
//             foodKgs -= 300;
//             hayKgs -= 0.05 * foodKgs;
//         } else {
//             foodKgs -= 300;
//         }
//         day++
//     }
//     console.log(foodKgs);
//     console.log(hayKgs);
//     console.log(coverKgs)



// }
// guineaPig([10,5,5.2,1])