window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name') 
    let peopleElement = document.getElementById('people-count')
    let fromDateElement = document.getElementById('from-date') 
    let daysElement = document.getElementById('days-count') 
    let nextBtn = document.querySelector('#next-btn');
    let inftoTicketSection = document.querySelector('.ticket-info-list')
    nextBtn.addEventListener('click', onClick);

    function onClick(e){
        e.preventDefault()
        if(firstNameElement.value && lastNameElement.value && peopleElement.value && fromDateElement.value && daysElement.value){
            let editFirstName = firstNameElement.value;
            let editLastName = lastNameElement.value;
            let editPeople = peopleElement.value;
            let editFromDate = fromDateElement.value;
            let editDays = daysElement.value;

            firstNameElement.value = '';
            lastNameElement.value = '';
            peopleElement.value = '';
            fromDateElement.value = '';
            daysElement.value = ''
            nextBtn.disabled = true;
            let liItem = document.createElement('li');
            liItem.classList = 'ticket';
            let articleItem = document.createElement('article');
            let h3Item = document.createElement('h3');
            h3Item.textContent = `Name: ${editFirstName} ${editLastName}`;
            let fromDateItem = document.createElement('p');
            fromDateItem.textContent = `From date: ${editFromDate}`
            let daysItem = document.createElement('p');
            daysItem.textContent = `For ${editDays} days`;
            let peopleItem = document.createElement('p');
            peopleItem.textContent = `For ${editPeople} people`;
            articleItem.appendChild(h3Item);
            articleItem.appendChild(fromDateItem);
            articleItem.appendChild(daysItem);
            articleItem.appendChild(peopleItem);
            let editBtn = document.createElement('button');
            editBtn.classList = 'edit-btn';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                liItem.remove()
                nextBtn.disabled = false;
                firstNameElement.value = editFirstName;
                lastNameElement.value = editLastName;
                peopleElement.value = editPeople
                fromDateElement.value = editFromDate;
                daysElement.value = editDays;
            })
            let continueBtn = document.createElement('button');
            continueBtn.classList = 'continue-btn';
            continueBtn.textContent = 'Continue';
            continueBtn.addEventListener('click', () => {
                let confirmTicket = document.querySelector('.confirm-ticket');
                let currentButtonsArr = liItem.querySelectorAll('button');
                Array.from(currentButtonsArr).forEach(x => x.remove());
                let cancelBtn = document.createElement('button');
                cancelBtn.textContent = 'Cancel';
                cancelBtn.classList = 'cancel-btn'
                cancelBtn.addEventListener('click', () => {
                    nextBtn.disabled = false;
                    liItem.parentElement.remove()
                })
                let confirmBtn = document.createElement('button');
                confirmBtn.classList = 'confirm-btn';
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', () => {
                    let mainElement = document.getElementById('main');
                    let getBodyElement = document.getElementById('body');
                    mainElement.remove();
                    let h1Element = document.createElement('h1');
                    h1Element.id = 'thank-you';
                    h1Element.textContent = 'Thank you, have a nice day!'
                    let backBtn = document.createElement('button');
                    backBtn.textContent = 'Back';
                    backBtn.id = 'back-btn';
                    backBtn.addEventListener('click', () => {
                        location.reload();
                    })
                    getBodyElement.appendChild(h1Element);
                    getBodyElement.appendChild(backBtn)

                } )
                liItem.classList = 'ticket-content'
                liItem.appendChild(confirmBtn)
                liItem.appendChild(cancelBtn)
                confirmTicket.appendChild(liItem);

            })

            liItem.appendChild(articleItem);
            liItem.appendChild(editBtn);
            liItem.appendChild(continueBtn)
     
            inftoTicketSection.appendChild(liItem)
        }
    }
}


    
    
