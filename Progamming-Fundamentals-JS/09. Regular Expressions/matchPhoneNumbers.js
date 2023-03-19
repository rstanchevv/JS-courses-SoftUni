function matchPhoneNumbers(arr){
    let phoneNumbers =  arr[0];
    let regex = /\+359(?<delimiter>([- ]))2\k<delimiter>\d{3}\k<delimiter>\d{4}\b/g;
    let match = regex.exec(phoneNumbers);
    let validNumbers = [];
    while (match != null){
        validNumbers.push(match[0]);
        match = regex.exec(phoneNumbers)
    }
    console.log(validNumbers.join(", "))
}
matchPhoneNumbers(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953, +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740, +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])