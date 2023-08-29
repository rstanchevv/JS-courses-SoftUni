const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, text) => 
    console.log(`test`)
)


const input = fs.readFileSync('./input.txt', 'utf-8');

console.log(input)
