function toggle(){
    let moreLessElement = document.getElementsByClassName('button')[0];
    let divElement = document.getElementById('extra');
    if (divElement.style.display === "none"){
        moreLessElement.textContent = "Less";
        divElement.style.display = "block"
    } else {
        moreLessElement.textContent = "More";
        divElement.style.display = "none"
    }
}
