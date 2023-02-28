function songs(arr){
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songsNumber = arr[0];
    let arrSongs = arr.slice(1, songsNumber + 1);
    for (let i = 0; i < songsNumber; i++){
        let arrSplit = arrSongs[i].split("_");
        let typeList = arrSplit[0];
        let name = arrSplit[1];
        let time = arrSplit[2];
        let mySong = new Song(typeList, name, time);
        songsArr.push(mySong)
        if (mySong.typeList === arr[arr.length - 1]){
            console.log(mySong.name)
        } else if (arr[arr.length - 1] === "all"){
        console.log(mySong.name)
        }
    }
}
songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'all'])