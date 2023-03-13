function schoolGrades(input){
    let obj = {};
    for (const el of input) {
        let tokens = el.split(" ");
        let name = tokens[0];
        let grades = tokens.slice(1).join(" ")
        if (!obj.hasOwnProperty(name)){
            obj[name] = grades
        } else {
            obj[name] += ` ${grades}`;
        }
    }
    let entries = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (const [name, grades] of entries) {
        let splitGrades = grades.split(" ").map(Number);
        let getAverage = splitGrades.reduce((a,b) => a + b,0) / splitGrades.length;
        console.log(`${name}: ${getAverage.toFixed(2)}`)
    } 
}
schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])