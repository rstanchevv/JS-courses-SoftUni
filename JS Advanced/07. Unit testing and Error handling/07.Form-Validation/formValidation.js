function validate() {
    let usernameElement = document.getElementById('username')
    let emailElement = document.getElementById('email')
    let passwordElement = document.getElementById('password')
    let confirmPasswordElement = document.getElementById('confirm-password')
    let companyCheckBoxElement = document.getElementById('company');
    let companyInfoFieldset = document.getElementById('companyInfo')
    let submitBtn = document.getElementById('submit');
    let companyNumber = document.getElementById('companyNumber')
    let validElement = document.getElementById('valid');
    let usernameValidation = /^[A-Za-z0-9]{3,20}$/;
    let passwordValidation = /^[\w]{5,15}$/
    let emailValidation = /^[^@.]+@[^@]*\.[^@]*$/;

    companyCheckBoxElement.addEventListener('change', () => {
        if(companyInfoFieldset.style.display === 'none'){
        companyInfoFieldset.style.display = 'block'
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    })
    submitBtn.addEventListener('click', (e) => {
        let isValid = true;
        e.preventDefault();
        if(!usernameElement.value.match(usernameValidation)){
            usernameElement.style.borderColor = 'red';
            isValid = false;
        } else {
            usernameElement.style.borderColor = '';
        }
        if(!emailElement.value.match(emailValidation)){
            emailElement.style.borderColor = 'red';
            isValid = false;
        } else {
            emailElement.style.borderColor = '';
        }
        if (passwordElement.value === confirmPasswordElement.value && passwordValidation.test(passwordElement.value) === true && passwordValidation.test(confirmPasswordElement.value) === true){
            passwordElement.style.borderColor = '';
            confirmPasswordElement.style.borderColor = '';
        } else {
            passwordElement.style.borderColor = 'red'
            confirmPasswordElement.style.borderColor = 'red'
            isValid = false;
        }
        if (companyCheckBoxElement.checked){
            if(companyNumber.value < 1000 || companyNumber.value > 9999){
                companyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }
        if (isValid){
            validElement.style.display = 'block'
        } else {
            validElement.style.display = 'none'
        }
    })
}
