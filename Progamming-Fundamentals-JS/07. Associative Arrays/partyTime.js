function partyTime(input) {
    let copyArr = input.slice();
    let vipUsers = [];
    let regularUsers = [];
    let command = copyArr.shift();
    while (command !== "PARTY") {
        if (isNaN(command[0])) {
            regularUsers.push(command);
        } else {
            vipUsers.push(command);
        }
        command = copyArr.shift()
    }
    let newArr = vipUsers.concat(regularUsers);
    for (const guest of copyArr) {
        newArr.splice(newArr.indexOf(guest), 1)
    }
    console.log(newArr.length)
    for (const el of newArr) {
        console.log(el)
    }
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)



