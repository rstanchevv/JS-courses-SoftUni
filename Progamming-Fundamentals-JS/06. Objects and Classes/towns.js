function towns(arr){
    for (let i = 0; i < arr.length; i++){
        let cityInfoArr = arr[i].split(" | ")
        let cityName = cityInfoArr[0];
        let cityLatitude = (Number.parseFloat(cityInfoArr[1]).toFixed(2));
        let cityLongitude = (Number.parseFloat(cityInfoArr[2]).toFixed(2));
        let cityObj = {
            town: cityName,
            latitude: cityLatitude,
            longitude: cityLongitude
        }
        console.log(cityObj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])