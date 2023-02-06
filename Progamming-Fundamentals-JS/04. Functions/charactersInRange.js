function charactersInRange(a,b){
    let buff = ''
    let charCodeA = getCharCodeA(a);
    let charCodeB = getCharCodeB(b);

    if (charCodeA < charCodeB){
        for (let i = charCodeA + 1; i < charCodeB; i++){
            buff += String.fromCharCode(i) + " ";
        }
    } else {
        for (let i = charCodeB + 1; i < charCodeA; i++){
            buff += String.fromCharCode(i) + " ";
        }
    }
    console.log(buff)
    function getCharCodeA(a){
        return a.charCodeAt();
    }
    function getCharCodeB(b){
        return b.charCodeAt();
    }
}
charactersInRange('C',

'#')
