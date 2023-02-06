function loadingBar(num) {
    if (num < 100){
        console.log(`${num}% [${printLoadingBar(num)}]`);
        console.log(`Still loading...`)
    } else{
        console.log(`100% Complete.`)
    }


    function printLoadingBar(a) {
        let loadingBar = [];
        for (let i = 0; i < 10; i++) {
            loadingBar.push(".")
        }
        if (num >= 10) {
            loadingBar[0] = "%";
        }
        if (num >= 20) {
            loadingBar[1] = "%";
        }
        if (num >= 30) {
            loadingBar[2] = "%";
        }
        if (num >= 40) {
            loadingBar[3] = "%";
        }
        if (num >= 50) {
            loadingBar[4] = "%";
        }
        if (num >= 60) {
            loadingBar[5] = "%";
        }
        if (num >= 70) {
            loadingBar[6] = "%";
        }
        if (num >= 80) {
            loadingBar[7] = "%";
        }
        if (num >= 90) {
            loadingBar[8] = "%";
        }
        if (num >= 100) {
            loadingBar[9] = "%"
        }
        return loadingBar.join("")
    }
}
loadingBar(100);
