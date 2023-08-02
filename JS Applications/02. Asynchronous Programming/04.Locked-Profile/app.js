function lockedProfile() {
    let profileCard = document.querySelector('.profile');
    let mainElement = document.getElementById('main');
    
    async function createProfileCards(){
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
        const data = await response.json();

        let people = Object.keys(data);
        
        people.forEach(person => {
            let copyPerson = profileCard.cloneNode(true);
            copyPerson.querySelector(':nth-child(10').style.display = 'none'
            copyPerson.querySelector(':nth-child(9)').value = data[person].username;
            copyPerson.querySelector(':nth-child(10)>:nth-child(3)').value = data[person].email
            copyPerson.querySelector(':nth-child(10)>:nth-child(5)').value = data[person].age;
            let showMoreBtn = copyPerson.querySelector(':nth-child(11)')
            showMoreBtn.addEventListener('click', showMoreFnc)

            mainElement.appendChild(copyPerson)

        })

        function showMoreFnc(e){
            let isLocked = true;

            if (e.target.parentElement.querySelector('input[type=radio]:checked').defaultValue === 'unlock'){
                isLocked = false;
            }

            if (e.target.textContent === 'Show more' && !isLocked){
                e.target.parentElement.querySelector(':nth-child(10)').style.display = 'block'
                e.target.textContent = 'Hide it'
            } else if (e.target.textContent === 'Hide it' && !isLocked){
                e.target.parentElement.querySelector(':nth-child(10)').style.display = 'none';
                e.target.textContent = 'Show more'
            } 
        }

        mainElement.querySelector(':nth-child(1)').remove()

    }
    createProfileCards()
}