function focused() {
    let divElements = document.querySelectorAll('input[type="text"');
    let array = Array.from(divElements);
    array.forEach(x => {
        x.addEventListener('input', () => {
            x.parentNode.classList = 'focused'
        })
        x.addEventListener('blur', () => {
            x.parentNode.classList.remove('focused');
        })
    })
}