function password(input){
    let username = input[0];
    let password = input[1];
    let index = 2;
    let givenPassword = input[index];
    index++
    while (givenPassword !== password ){
        givenPassword = input[index];
        index++
    }
    console.log(`Welcome ${username}!`)
}
password((["Gosho", "secret", "secret"]))