function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', function () {
        if (pattern.test(inputField.value)){
            inputField.classList = ''
        } else {
            inputField.classList = 'error'
        }
    })
}