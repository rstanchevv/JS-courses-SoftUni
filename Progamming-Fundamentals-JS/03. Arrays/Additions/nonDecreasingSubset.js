function nonDecreasingSubset(arr){
    let newArr = []
    newArr.push(arr[0]);
    for (let index = 1; index <= arr.length; index++) {
        const element = arr[index];
        if (element >= Math.max(...newArr)){
            newArr.push(element)
        }
    }
    console.log(newArr.join(" "))
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])

// function solve(arr){
//     const newArr = [];
//     newArr.push(arr[0]);
//     for (let index = 1; index < arr.length; index++) {
//         const filtering = arr.filter(num => num[index] > newArr[index])
//         console.log(filtering)
//     }
// }
// solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
