function extractFile(fileLocation){
    let fileLocationSplit = fileLocation.split("\\");
    let fileNameAndExtensionSplit = fileLocationSplit[fileLocationSplit.length - 1].split(".");
    let extension = fileNameAndExtensionSplit.pop();
    let fileName = fileNameAndExtensionSplit.join(".")
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`)
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')
