function divSum(num){
    let result = 0;
 
    for (let i=2; i<=Math.sqrt(num); i++)
    {
        if (num%i==0){
            if (i==(num/i))
                result += i;
            else
                result += (i + num/i);
        }
    }
    result += 1;
    return result === num ? `We have a perfect number!` : `It's not so perfect.`
}
console.log(divSum(1236498))
 