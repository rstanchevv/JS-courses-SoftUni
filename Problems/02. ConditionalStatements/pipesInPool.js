// •	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
// •	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
// •	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
// •	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]




function pipesinPool(input){

    let poolCpacityinLitres = Number(input[0]);
    let firstPipeDebit = Number(input[1]);
    let secondPipeDebit = Number(input[2]);
    let workerOff =Number(input[3]);

    
    let FirstPipeFilled = firstPipeDebit * workerOff;
    let SecondPipeFilled = secondPipeDebit * workerOff;
    let filledCapacity = (FirstPipeFilled + SecondPipeFilled);

    if (poolCpacityinLitres > filledCapacity){
        let filledinPercent = (filledCapacity / poolCpacityinLitres) * 100;
        let firstPipeDebitinPercent =  (FirstPipeFilled / filledCapacity * 100).toFixed(2);
        let secondPipeDebitinPercent = (SecondPipeFilled / filledCapacity * 100).toFixed(2);
        console.log(`The pool is ${filledinPercent}% full. Pipe 1: ${firstPipeDebitinPercent}%. Pipe 2: ${secondPipeDebitinPercent}%.`)
    } else {
        let overflow = (filledCapacity - poolCpacityinLitres).toFixed(2);
        console.log(`For ${workerOff} hours the pool overflows with ${overflow} liters.`)
    }



}
pipesinPool([100, 100, 100, 2.5])