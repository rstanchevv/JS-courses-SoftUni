const chai =  require('chai');

function sum(arr){
    let sum = 0;
    for (const number of arr) {
        sum += Number(number)
    }
    return sum;
}

    describe('sum function', function(){
        it('should sum integers correctly', function(){
            let arr = [3,5,6];
            let result = sum(arr);
            chai.expect(result).to.equal(14)
        })
    })

