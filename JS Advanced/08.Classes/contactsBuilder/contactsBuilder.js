class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    get compose(){
        let mainElement = document.querySelector('#main');
        let cloneElement = mainElement.cloneNode(true);
        let titleElement = cloneElement.querySelector('.title');
        titleElement.textContent = `${this.firstName} ${this.lastName}`
        let infoButton = document.createElement('button');
        infoButton.textContent = 'asd';
    
        titleElement.appendChild(infoButton)
        let infoElement = cloneElement.querySelector('.info');
        infoElement.children[0].textContent = `\u260E') ${this.phone}`
        infoElement.children[1].textContent = `&#9993; ${this.email}`

        titleElement.children[0].addEventListener('click', hideOrShow);

        function hideOrShow(e){
            if (e.target.parentNode.style.display === 'none'){
                e.target.parentNode.style.display = 'block'
            } else {
                e.target.parentNode.style.display = 'none'
            }
        }
        return cloneElement;
    }

    render(id){
        let targetId = document.getElementById(id);
        targetId.appendChild(this.compose)
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
   ];
   contacts.forEach(c => c.render('main'));
   setTimeout(() => contacts[1].online = true, 2000);