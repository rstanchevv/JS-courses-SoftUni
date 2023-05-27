function calculator() {
    let firstInput;
    let secondInput;
    let thirdInput;
    function init(num1, num2, result){
        firstInput = document.querySelector(num1);
        secondInput = document.querySelector(num2);
        thirdInput = document.querySelector(result);
    }
    function add(){
        return thirdInput.value = Number(firstInput.value) + Number(secondInput.value);
    }
    function subtract(){
        return thirdInput.value = Number(firstInput.value) - Number(secondInput.value);
    }  
    return {
        init,
        add,
        subtract
    }
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');






