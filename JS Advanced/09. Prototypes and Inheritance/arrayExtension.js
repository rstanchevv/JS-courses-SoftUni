(function solve() {
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        let result = [];
        for (let i  = n; i < this.length; i++){
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function(n){
        let result = [];
        for (let i = 0; i < n; i++){
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function(){
        let result = 0;
        for (const number of this) {
            result += Number(number);
        }
        return result;
    }
    Array.prototype.average = function(){
        let result = 0;
        for (const number of this) {
            result += Number(number);
        }
        return result / this.length;
    }
})()

let myArr = [1,2,3];
console.log(myArr.last())