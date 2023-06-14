window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name')
    let lastNameElement = document.getElementById('last-name')
    let dateInElement = document.getElementById('date-in')
    let dateOutElement = document.getElementById('date-out')
    let peopleCountElement = document.getElementById('people-count')
    let nextBtn = document.getElementById('next-btn')
    let infoListElement = document.querySelector('.info-list')

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(firstNameElement.value && lastNameElement.value && dateInElement.value && dateOutElement.value && peopleCountElement.value && new Date(dateInElement.value) < new Date(dateOutElement.value)){
            
            let liItem = document.createElement('li');
            liItem.classList = 'reservation-content'
            
            let articleItem = document.createElement('article');

            let h3Item = document.createElement('h3');
            h3Item.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

            let fromDatePItem = document.createElement('p');
            fromDatePItem.textContent = `From date: ${dateInElement.value}`

            let toDatePItem = document.createElement('p');
            toDatePItem.textContent = `To date: ${dateOutElement.value}`;

            let peopleCountItem = document.createElement('p');
            peopleCountItem.textContent = `For ${peopleCountElement.value} people`;

            let editBtn = document.createElement('button');
            editBtn.classList = 'edit-btn';
            editBtn.textContent = 'Edit';

            
            let continueBtn = document.createElement('button');
            continueBtn.classList = 'continue-btn';
            continueBtn.textContent = 'Continue';

        
            articleItem.appendChild(h3Item);
            articleItem.appendChild(fromDatePItem);
            articleItem.appendChild(toDatePItem);
            articleItem.appendChild(peopleCountItem);

            liItem.appendChild(articleItem);
            liItem.appendChild(editBtn);
            liItem.appendChild(continueBtn);
            infoListElement.appendChild(liItem);
            
            let firstName = firstNameElement.value;
            let lastName = lastNameElement.value;
            let dateIn = dateInElement.value;
            let dateOut = dateOutElement.value;
            let peopleCount = peopleCountElement.value;
            firstNameElement.value = '';
            lastNameElement.value = '';
            dateInElement.value = '';
            dateOutElement.value = '';
            peopleCountElement.value = '';
            nextBtn.disabled = true;

            editBtn.addEventListener('click', () => {
                firstNameElement.value = firstName;
                lastNameElement.value = lastName;
                dateInElement.value = dateIn;
                dateOutElement.value = dateOut;
                peopleCountElement.value = peopleCount;
                nextBtn.disabled = false;
                liItem.remove();
            })

            continueBtn.addEventListener('click', () => {
                let elementConfirm = document.createElement('li')
                elementConfirm.classList = 'reservation-content';

                let articleElementContinue = document.createElement('article');
                articleElementContinue = articleItem;
                
                elementConfirm.appendChild(articleElementContinue);

                let confirmListElement = document.querySelector('.confirm-list');

                confirmListElement.appendChild(elementConfirm);

                let reserVationContentElement = document.querySelector('.reservation-content');
                reserVationContentElement.remove()

                let buttons = confirmListElement.getElementsByTagName('button');
                for (const button of buttons) {
                    button.remove();
                }

                let confirmBtn = document.createElement('button')
                confirmBtn.classList = 'confirm-btn';
                confirmBtn.textContent = 'Confirm'
                confirmBtn.addEventListener('click', (e) => {
                    e.target.parentNode.remove()
                    nextBtn.disabled = false;
                    let verificationElement = document.getElementById('verification');
                    let h1Element = document.createElement('h1');
                    h1Element.classList = 'reservation-confirmed';
                    h1Element.textContent = 'Confirmed.'
                    verificationElement.appendChild(h1Element)
                })

                let cancelBtn = document.createElement('button');
                cancelBtn.classList = 'cancel-btn';
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', (e) => {
                    e.target.parentNode.remove()
                    nextBtn.disabled = false;
                    let verificationElement = document.getElementById('verification');
                    let h1Element = document.createElement('h1');
                    h1Element.classList = 'reservation-cancelled';
                    h1Element.textContent = 'Cancelled.'
                    verificationElement.appendChild(h1Element)
                })

                elementConfirm.appendChild(confirmBtn);
                elementConfirm.appendChild(cancelBtn);
            })
        } else {
            return;
        }
    })
    }
