function addAndRemove(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === "add"){
            newArr.push(i + 1);
        } else {
            newArr.pop()
        }
    }
    if (newArr.length < 1){
        console.log(`Empty`)
    } else{
    console.log(newArr.join(" "))
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])