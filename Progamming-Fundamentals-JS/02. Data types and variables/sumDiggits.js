function sumDiggits(number){
    let toString = number.toString();
    let sum = 0;
    for (let i = 0; i < toString.length; i++){
        sum += Number(toString[i])
    }
    console.log(sum)
}
sumDiggits(245678)