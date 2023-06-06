function validate() {
    let inputElement = document.getElementById('email');
    let pattern = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/g
    inputElement.addEventListener('change', (e) => {
        if(!inputElement.value.match(pattern)){
            e.target.classList = 'error'
        } else {
            e.target.classList = ''
        }
    })
}