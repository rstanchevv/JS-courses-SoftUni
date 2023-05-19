function encodeAndDecodeMessages() {
    let targetMessageTextArea = document.querySelectorAll('textarea')[0];
    let targetReceivedTextArea = document.querySelectorAll('textarea')[1];
    let buttonElements = [...document.querySelectorAll('button')];
    buttonElements.forEach(btn => {
        if(btn.textContent === 'Encode and send it'){
            btn.addEventListener('click', encodeAndSave)
        } else if (btn.textContent === 'Decode and read it'){
            btn.addEventListener('click', decodeAndRead)
        }
    })

    function encodeAndSave(){
        let newMessage = ''
        for (const char of targetMessageTextArea.value) {
            let charCodeAt = char.charCodeAt()
            newMessage += String.fromCharCode(charCodeAt + 1)
        }
        targetMessageTextArea.value = ''
        targetReceivedTextArea.value = newMessage;
    }
    function decodeAndRead(){
        let decodedMessage = '';
        for (const char of targetReceivedTextArea.value) {
            let charCodeAt = char.charCodeAt();
            decodedMessage += String.fromCharCode(charCodeAt - 1);        }
        targetReceivedTextArea.value = decodedMessage;
    }
}