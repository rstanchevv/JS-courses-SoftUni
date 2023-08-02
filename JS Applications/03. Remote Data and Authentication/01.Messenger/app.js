function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessage)
    document.getElementById('refresh').addEventListener('click', getMessages)

    async function postMessage(){
        let postObj = {
            author: document.querySelector('input[name="author"]').value,
            content: document.querySelector('input[name="content"]').value
        }

        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        const data = await response.json();
    }
    async function getMessages(){
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        let messages = document.getElementById('messages');
        console.log(messages)
        let arrOfMessages = [];
        Object.values(data).forEach(row => {
            arrOfMessages.push(`${row.author}: ${row.content}`)
        })
        messages.textContent = arrOfMessages.join('\n')
    }
}

attachEvents();