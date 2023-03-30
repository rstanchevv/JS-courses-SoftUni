function extractEmails(text){
    let pattern = /(^| )[A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]*@([a-zA-Z]+([\.\-_][A-Za-z]+)+)\b/g
    let emailsArr = [];
    let match = pattern.exec(text)
    while (match !== null){
        let email = match[0].trim();
        emailsArr.push(email);
        match = pattern.exec(text)
    }
    console.log(emailsArr.join("\n"))
}
extractEmails(`Please contact us at: support@github.com.`)