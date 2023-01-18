// function pyramid(baseSize, baseHigth) {
//     let totalStones = 0;
//     let totalMarbels = 0;
//     let totalLapisLazuli = 0;
//     let totalGoldBlocks = 0;
//     let totalSteps = 0;
   
//     for (let i = baseSize; i > 0; i -= 2) {
//       totalSteps++;
//       let outerLayer = (i * 4 - 4) * baseHigth;
//       let innerLayer = (i - 2) * (i - 2) * baseHigth;
   
//       if (i <= 2) {
//         totalGoldBlocks = i * i * baseHigth;
//         break;
//       } else if (totalSteps % 5 == 0) {
//         totalLapisLazuli += outerLayer;
//         totalStones += innerLayer;
//       } else {
//         totalMarbels += outerLayer;
//         totalStones += innerLayer;
//       }
//     }
   
//     let pyramidHigth = totalSteps * baseHigth;
   
//     console.log(`Stone required: ${Math.ceil(totalStones)}`);
//     console.log(`Marble required: ${Math.ceil(totalMarbels)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
//     console.log(`Gold required: ${Math.ceil(totalGoldBlocks)}`);
//     console.log(`Final pyramid height: ${Math.floor(pyramidHigth)}`);
//   }
//   pyramid(11,1)


function pyramid(base, increment){7
    let totalStones = 0;
    let totalMarbles = 0;
    let totalLapisLazuli = 0;
    let totalGoldBlocks = 0;
    let totalSteps = 0;
    for (let i = base; i > 0; i-=2){
        totalSteps++
        let outerLayer = (i-2) * (i-2) * increment;
        let innerLayer = (i * 4 - 4) * increment;
        if (totalSteps % 5 == 0){
            totalLapisLazuli += innerLayer;
            totalStones += outerLayer;
        } else if (i <= 2){
            totalGoldBlocks = i * i * increment;
            break;
        } else{
            totalStones += outerLayer;
            totalMarbles += innerLayer;
        }
    }
    let pyramidHigth = totalSteps * increment;
    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGoldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHigth)}`)
}
pyramid(11,1)