function equalNeighbours(arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (const number of arr[i]) {
            if (i === arr.length - 1){
                break;
            }
            let indexOf = arr[i].indexOf(number);
            if (arr[i].lastIndexOf(number) !== -1){
                let lastIndex = arr[i].lastIndexOf(number);
                if (lastIndex === indexOf + 1){
                    counter++
                }
            }
            if (arr[i + 1].includes(number)){
                let firstIndexOf = arr[i + 1].indexOf(number);
                let secondIndexOf = (arr[i+1].lastIndexOf(number));
                if (indexOf === secondIndexOf || indexOf === firstIndexOf){
                    counter++
                }
            }
        }
    }
    return counter;
}
console.log(equalNeighbours([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
))