function matchFullName(names){
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let match = regex.exec(names)
    let namesArr = [];
    while (match != null){
        namesArr.push(match[0]);
        match = regex.exec(names)
    }
    console.log(namesArr.join(" "))
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")