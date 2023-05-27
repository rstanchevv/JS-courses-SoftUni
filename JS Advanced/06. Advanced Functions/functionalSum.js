function add(num){
    let sum = 0;

    function inner(number){
        sum += number;
        return inner;
    }

    inner.toString = () => {
        return sum;
    }
    return inner(num);
}
console.log(add(5)(6)(15).toString())