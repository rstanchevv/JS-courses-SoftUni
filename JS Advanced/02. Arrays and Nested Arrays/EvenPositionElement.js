function evenPositionElement(arr){
    let output = '';
    for (let i =0; i < arr.length; i++){
        if (i === 0 || i % 2 === 0){
            output += `${arr[i]} `
        }
    }
    console.log(output.trim())
}
evenPositionElement(['20', '30', '40',
'50', '60'])