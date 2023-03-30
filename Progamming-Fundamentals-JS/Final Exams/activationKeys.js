function activationKeys(arr){
    let rawActivationKey = arr.shift();
    let lines = arr.slice();
    let line = lines.shift();
    while (line !== "Generate"){
        let [command, valueOne, valueTwo, valueThree] = line.split(">>>");
        switch(command){
            case "Contains":
                if (rawActivationKey.includes(valueOne)){
                    console.log(`${rawActivationKey} contains ${valueOne}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case "Flip":
                let substring = rawActivationKey.substring(Number(valueTwo), Number(valueThree));
                if (valueOne === "Upper"){
                    let toUpper = substring.toUpperCase();
                    rawActivationKey = rawActivationKey.replace(substring, toUpper);
                    console.log(rawActivationKey)
                } else {
                    let toLower = substring.toLowerCase();
                    rawActivationKey = rawActivationKey.replace(substring, toLower);
                    console.log(rawActivationKey)
                }
                break;
            case "Slice":
                let subStringForSlice = rawActivationKey.substring(valueOne, valueTwo);
                rawActivationKey = rawActivationKey.replace(subStringForSlice, "");
                console.log(rawActivationKey)
                break;
        } 
        line = lines.shift()
    }
    console.log(`Your activation key is: ${rawActivationKey}`)
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
