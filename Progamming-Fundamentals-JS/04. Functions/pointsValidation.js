function pointsValidation(arr) {
    console.log(distanceBetweenXYand0(arr))
    console.log(distanceBetweenX2Y2and0(arr))
    console.log(distanceBetweenPoints(arr))

    function distanceBetweenX2Y2and0(arr) {
        let a = 0;
        let b = 0;
        let xTrue = arr[2] - a;
        let mathPow = Math.pow(xTrue, 2);
        let yTrue = arr[3] - b;
        let mathPowY = Math.pow(yTrue, 2)
        let sumMathSqrt = Math.sqrt(mathPow + mathPowY);
        if (sumMathSqrt % 1 === 0) {
            return `{${arr[2]}, ${arr[3]}} to {${a}, ${b}} is valid`
        }
        return `{${arr[2]}, ${arr[3]}} to {${a}, ${b}} is invalid`
    }
    function distanceBetweenXYand0(arr) {
        let a = 0
        let b = 0;
        let xTrue = a - arr[0];
        let mathPow = Math.pow(xTrue, 2);
        let yTrue = b - arr[1];
        let mathPowY = Math.pow(yTrue, 2)
        let sumMathSqrt = Math.sqrt(mathPow + mathPowY);
        if (sumMathSqrt % 1 === 0) {
            return `{${arr[0]}, ${arr[1]}} to {${a}, ${b}} is valid`
        }
        return `{${arr[0]}, ${arr[1]}} to {${a}, ${b}} is invalid`
    }
    function distanceBetweenPoints(arr) {
        let xTrue = arr[2] - arr[0];
        let mathPow = Math.pow(xTrue, 2);
        let yTrue = arr[3] - arr[1];
        let mathPowY = Math.pow(yTrue, 2)
        let sumMathSqrt = Math.sqrt(mathPow + mathPowY);
        if (sumMathSqrt % 1 === 0) {
            return `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`
        }
        return `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`
    }
}
pointsValidation([2, 1, 1, 1])