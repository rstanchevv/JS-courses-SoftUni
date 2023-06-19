(function solve(){
    String.prototype.ensureStart = function(str){
        if (!this.startsWith(str)){
            return `${str}${this}`
        }
        else {
            return this;
        }
    }
    String.prototype.ensureEnd = function(str){
        if (!this.endsWith(str)){
            return `${this}${str}`
        } else {
            return this;
        }
    }
    String.prototype.isEmpty = function(){
        if (this.length === 0){
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function(n){
        if(this.length < n){
            return this;
        }
        let stringSplit = this.split(" ");
        
    }
    String.format = function(string, ...params){
        
    }

})()
