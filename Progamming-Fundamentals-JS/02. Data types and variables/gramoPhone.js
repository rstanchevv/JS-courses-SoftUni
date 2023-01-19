function gramoPhone(bandName, albumName, songName){

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)



}
gramoPhone('Rammstein', 'Sehnsucht', 'Engel')