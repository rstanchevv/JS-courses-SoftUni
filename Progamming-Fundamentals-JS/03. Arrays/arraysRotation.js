function arraysRotation(arr, num){
    for (let index = 0; index < num; index++) {
        const element = arr[index];
        arr.push(element);
    }
    arr.splice(0,num)
    console.log(arr.join(" "))
}
arraysRotation([2, 4, 15, 31], 5)