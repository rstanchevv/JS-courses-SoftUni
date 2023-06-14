function solve() {
    let firstNameElement = document.getElementById('fname')
    let lastNameElement = document.getElementById('lname')
    let emailElement = document.getElementById('email')
    let birthElement = document.getElementById('birth')
    let positionElement = document.getElementById('position')
    let salaryElement = document.getElementById('salary')
    let addWorkerBtn = document.getElementById('add-worker');
    let tableSection = document.querySelector('.tbl-header');
    let sumElement = document.getElementById('sum');

    addWorkerBtn.addEventListener('click', addFnc)

    function addFnc(e){
        e.preventDefault();
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if (!firstName || !lastName || !email || !birth || !position || !salary){
            return;
        }

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        let div = document.createElement('div');
        div.classList = 'tbl-content';
        let table = document.createElement('table')
        let tbody = document.createElement('tbody');
        tbody.id = 'tbody';
        let tr = document.createElement('tr');

        let firstNameItem = document.createElement('td');
        firstNameItem.textContent = firstName;
        let lastNameItem = document.createElement('td');
        lastNameItem.textContent = lastName;;
        let emailItem = document.createElement('td');
        emailItem.textContent = email;
        let birthItem = document.createElement('td');
        birthItem.textContent = birth;
        let positionItem = document.createElement('td');
        positionItem.textContent = position;
        let salaryItem = document.createElement('td');
        salaryItem.textContent = salary;
        let buttonsTTd = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList = 'fired';
        firedBtn.textContent = 'Fired'

        let editBtn = document.createElement('button');
        editBtn.classList = 'edit';
        editBtn.textContent = 'Edit'

        buttonsTTd.appendChild(firedBtn);
        buttonsTTd.appendChild(editBtn);

        tr.appendChild(firstNameItem)
        tr.appendChild(lastNameItem)
        tr.appendChild(emailItem)
        tr.appendChild(birthItem)
        tr.appendChild(positionItem)
        tr.appendChild(salaryItem)
        tr.appendChild(buttonsTTd)
        
        tbody.appendChild(tr);
        table.appendChild(tbody);

        tableSection.appendChild(table);
        if (sumElement.textContent === '0.00'){
            sumElement.textContent = '';
        }
        sumElement.textContent = (Number(sumElement.textContent) + Number(salary)).toFixed(2);

        editBtn.addEventListener('click', editFnc);
        firedBtn.addEventListener('click', firedFnc);


        function editFnc(e){
            e.target.parentNode.parentNode.remove();
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            emailElement.value = email;
            birthElement.value = birth;
            positionElement.value = position;
            salaryElement.value = salary;
            sumElement.textContent = (Number(sumElement.textContent) - salary).toFixed(2);
        }
        function firedFnc(e){
            e.target.parentNode.parentNode.remove();
            sumElement.textContent = (Number(sumElement.textContent) - salary).toFixed(2);
        }
    }
}
solve()