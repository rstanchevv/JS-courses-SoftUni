function rotateArray(arr){
    arr.toString();
    let nOfRotation = Number(arr[arr.length - 1]);
    arr.pop()
    for (let i = 0; i < nOfRotation; i++) {
        const element = arr[0];
        arr.unshift(arr.pop(element));
    }
    console.log(arr.join(" "))
}

// function solve(arr)
// {
//     let rotations = +arr[arr.length - 1];
//     arr.pop();
//     for(let i = 1; i <= rotations; i++)
//     {
//         let current = arr.pop();
//         arr.unshift(current);
//     }
//     console.log(arr.join(' '));
// }
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15'])
