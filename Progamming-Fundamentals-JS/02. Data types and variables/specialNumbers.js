function specialNumbers(num){
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++){
        i = i.toString();
        for (let j = 0; j < i.length; j++){
            sum += Number(i[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum =0;
    }
}
specialNumbers(15)