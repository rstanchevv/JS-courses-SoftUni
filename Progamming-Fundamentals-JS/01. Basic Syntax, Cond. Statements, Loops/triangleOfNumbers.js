function drawTriangle(number){
  let output = '';
  for (let row = 1; row <= number; row++){
    output = '';
    for (let col =1; col <= row; col++){
      output += row + " ";
    }
    console.log(output)
  }
}
drawTriangle(6)