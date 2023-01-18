function login(input){
    function ReverseString(str){
        return str.split(``).reverse().join(``);
    }
    ReverseString(`test`)
    let index = 0;
    let username = input[index];
    index++
    let password = input[index];
    index++
    let validatePassword = ReverseString(password)
    let counterWrongPasswords = 0;
    while (validatePassword !== username){
        counterWrongPasswords++;
        if (counterWrongPasswords === 4){
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`)
    password = input[index];
    validatePassword = ReverseString(password)
    index++
    }
    console.log(`User ${username} logged in.`)
}
login(['Acer','login','go','let me in','recA'])
