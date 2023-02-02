function mergeArrays(arr,arr2){
    let newArray = [];
    let newNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        const element =arr[i];
        const element2 =  arr2[i];
        if (i === 0){
            newNumber = Number(element) + Number(element2);
        }
        else if (i % 2 === 0){
            newNumber = Number(element) + Number(element2);
        } else{
            newNumber = element + element2;
        }
        newArray.push(newNumber);
    }
    console.log(newArray.join(" - "))
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)