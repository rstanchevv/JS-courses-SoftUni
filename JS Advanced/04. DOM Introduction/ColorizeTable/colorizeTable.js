function colorize(){
    let rowElements = document.getElementsByTagName('tr');
    for (let i = 1; i < rowElements.length; i+=2){
        rowElements[i].style = "background-color:Teal"
    }
}