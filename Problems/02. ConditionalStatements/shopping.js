// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]



function shopping(input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2])
    let ram = Number(input[3]);

    
    let videocardsExpense = videocards * 250;
    let processorExpense = videocardsExpense * 0.35 * processors
    let ramExpense = videocardsExpense * 0.10 * ram;
    let totalSum = videocardsExpense + processorExpense + ramExpense

    if (videocards > processors){
        totalSum = totalSum * 0.85
    }

    if (totalSum <= budget){
        let remaining = (budget - totalSum).toFixed(2);
        console.log(`You have ${remaining} leva left!`)
    } else {
        let needed = (totalSum - budget).toFixed(2);
        console.log(`Not enough money! You need ${needed} leva more!`)
    }
}
shopping([920.45, 3 ,1, 1])