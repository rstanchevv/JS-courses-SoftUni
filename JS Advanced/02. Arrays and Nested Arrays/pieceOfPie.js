function pieceOfPie(arr, string1,string2){
    let newArr = [];
    let startIndex = arr.indexOf(string1);
    let endIndex = arr.indexOf(string2);
    for (let i = startIndex; i <= endIndex; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'))