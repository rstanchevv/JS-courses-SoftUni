window.addEventListener('load', solve);

function solve() {
        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let partNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition')
        let nextBtn = document.getElementById('next-btn');
        let partInfoSection = document.querySelector('.info-list')
        let completeImgElement = document.getElementById('complete-img');
        let completeTextElement = document.getElementById('complete-text')
        let confirmListSection = document.querySelector('.confirm-list')

        nextBtn.addEventListener('click', nextFnc)

        function nextFnc(e){
                e.preventDefault();
                let carModel = carModelElement.value;
                let carYear = carYearElement.value;
                let partName = partNameElement.value;
                let partNumber = partNumberElement.value;
                let condition = conditionElement.value;

                if (!carModel || !carYear || Number(carYear) < 1980 || Number(carYear) > 2023 || !partName || !partNumber || !condition){
                        return;
                }

                completeImgElement.style.visibility = 'hidden'
                completeTextElement.textContent = '';
                nextBtn.disabled = true;
                
                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                partNumberElement.value = '';
                conditionElement.value = '';

                let liItem = document.createElement('li');
                liItem.classList.add('part-content');

                let articleItem = document.createElement('article');

                let carModelItem = document.createElement('p');
                carModelItem.textContent = `Car Model: ${carModel}`;

                let carYearItem = document.createElement('p');
                carYearItem.textContent = `Car Year: ${carYear}`;

                let partNameItem = document.createElement('p');
                partNameItem.textContent = `Part Name: ${partName}`

                let partNumberItem = document.createElement('p');
                partNumberItem.textContent = `Part Number: ${partNumber}`

                let conditionItem = document.createElement('p');
                conditionItem.textContent = `Condition: ${condition}`

                let editBtn = document.createElement('button');
                editBtn.classList = 'edit-btn';
                editBtn.textContent = 'Edit';

                let continueBtn = document.createElement('button');
                continueBtn.classList = 'continue-btn';
                continueBtn.textContent = 'Continue';

                articleItem.appendChild(carModelItem)
                articleItem.appendChild(carYearItem)
                articleItem.appendChild(partNameItem)
                articleItem.appendChild(partNumberItem)
                articleItem.appendChild(conditionItem)

                liItem.appendChild(articleItem)
                liItem.appendChild(editBtn)
                liItem.appendChild(continueBtn)

                partInfoSection.appendChild(liItem)

                editBtn.addEventListener('click', editFnc);
                continueBtn.addEventListener('click', continueFnc);

                function editFnc(e){
                        carModelElement.value = carModel;
                        carYearElement.value = carYear;
                        partNameElement.value = partName;
                        partNumberElement.value = partNumber;
                        conditionElement.value = condition;
                        e.target.parentElement.remove();
                        nextBtn.disabled = false;
                }
                function continueFnc(e){
                        let copyLi = e.target.parentElement;
                        Array.from(e.target.parentElement.querySelectorAll('button')).forEach(x => x.remove());
                        
                        let confirmBtn = document.createElement('button');
                        confirmBtn.classList = 'confirm-btn';
                        confirmBtn.textContent = 'Confirm';

                        let cancelBtn = document.createElement('button');
                        cancelBtn.classList = 'cancel-btn';
                        cancelBtn.textContent = 'Cancel';
                        
                        confirmBtn.addEventListener('click', confirmFnc);
                        cancelBtn.addEventListener('click', cancelFnc);

                        copyLi.appendChild(confirmBtn)
                        copyLi.appendChild(cancelBtn)

                        confirmListSection.appendChild(copyLi)


                        function confirmFnc(e){
                                e.target.parentElement.remove();
                                nextBtn.disabled = false;
                                completeImgElement.style.visibility = 'visible'
                                completeTextElement.textContent = `Part is Ordered!`
                        }

                        function cancelFnc(e){
                                nextBtn.disabled = false;
                                e.target.parentNode.remove();
                        }

                }
                
        }
};


    
    
