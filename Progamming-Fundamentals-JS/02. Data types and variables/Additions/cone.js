function cone(r, h){
    let coneVolume = Math.PI * (r * r * h /3);
    let coneArea = Math.PI * r * (r + Math.sqrt(r * r + h * h));
    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${coneArea.toFixed(4)}`)
}
cone(3, 5)