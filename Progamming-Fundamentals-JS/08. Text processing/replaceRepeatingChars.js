function replaceRepeatingCharts(string){
    let index = 1;
    let length = string.length;
    let text = string[0];
    while (index < string.length){
        if (string[index] !== string [index -1]){
            text += string[index]
        }
        index++
    }
    console.log(text)
}

replaceRepeatingCharts('aaaaabbbbbcdddeeeedssa') 