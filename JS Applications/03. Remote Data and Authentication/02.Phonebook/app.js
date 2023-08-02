function attachEvents() {
    const phoneBook = document.getElementById('phonebook')
    document.getElementById('btnLoad').addEventListener('click', init)
    document.getElementById('btnCreate').addEventListener('click', createElement)

    
    async function init(){
        phoneBook.replaceChildren();
        let arr = await onLoad();
        createLiElements(arr)
    }


    async function onLoad(){
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        return Object.entries(data);
    }

    async function createLiElements(arr){
        arr.forEach(record => {
            console.log(record)
            let liElement = document.createElement('li');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete'
            liElement.setAttribute('data-id', record[0])
            liElement.textContent = `${record[1].person}: ${record[1].phone}`
            liElement.appendChild(deleteBtn)
            phoneBook.appendChild(liElement)

            deleteBtn.addEventListener('click', deleteElement)
        })
    }

    async function deleteElement(el){
        const record = el.target.parentElement.dataset.id
        el.target.parentElement.remove()
        const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${record}`,{
            method: 'DELETE'
        })
        const data = await response.json();

        console.log(data)

    }

    async function createElement(){

        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        let postData = {
            person: person.value,
            phone: phone.value
       }
       const response = await fetch(`http://localhost:3030/jsonstore/phonebook/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
       })
       person.value = '';
       phone.value = ''
       init()
       const data = await response.json();
       console.log(data)
    }
}

attachEvents();