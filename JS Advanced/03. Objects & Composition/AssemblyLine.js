function createAssemblyLine(){
    function hasClima(obj){
        obj.temp = 21;
        obj.tempSettings = 21;
        function adjustTemp(){
            if (this.temp > 21){
                this.temp -= 1;
            } else if (this.temp < 21){
                this.temp += 1
            }
        }
    }
    hasClima();

}


    





