function rageQuit(text){
    let pattern = /([\D]+)(\d+)/g
    let newText = '';
    let match = pattern.exec(text);
    while (match !== null){
        newText += match[1].toUpperCase().repeat(match[2]);
        match = pattern.exec(text);
    }
    console.log(`Unique symbols used: ${[...new Set(newText)].length}`);
    console.log(`${newText}`)
}
rageQuit(`aSd2&a3@1`)