window.addEventListener('load', solve);

function solve() {
    let productTypeElement = document.getElementById('type-product');
    let descriptionELement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');
    let submitBtn = document.querySelector('button[type="submit"]')
    let receivedOrdersSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById('completed-orders')
    let clearBtn = document.querySelector('.clear-btn')

    submitBtn.addEventListener('click', submitFnc);
    
    function submitFnc(e){
        e.preventDefault();
        let productType = productTypeElement.value;
        let description = descriptionELement.value;
        let clientName = clientNameElement.value;
        let clientPhone = clientPhoneElement.value;
        if (!productType || !description || !clientName || !clientPhone){
            return;
        }
        productTypeElement.value = '';
        descriptionELement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';
        let newDiv = document.createElement('div');
        newDiv.classList.add('container');

        let productTypeItem = document.createElement('h2');
        productTypeItem.textContent = `Product type for repair: ${productType}`;

        let clientInformationItem = document.createElement('h3');
        clientInformationItem.textContent = `Client information: ${clientName}, ${clientPhone}`

        let descriptionItem = document.createElement('h4');
        descriptionItem.textContent = `Description of the problem: ${description}`

        let startBtn = document.createElement('button');
        startBtn.classList = 'start-btn';
        startBtn.textContent = 'Start repair'

        let finishBtn = document.createElement('button');
        finishBtn.classList = 'finish-btn';
        finishBtn.disabled = true;
        finishBtn.textContent = 'Finish repair'

        newDiv.appendChild(productTypeItem);
        newDiv.appendChild(clientInformationItem);
        newDiv.appendChild(descriptionItem);
        newDiv.appendChild(startBtn);
        newDiv.appendChild(finishBtn);
        receivedOrdersSection.appendChild(newDiv)


        startBtn.addEventListener('click', startFnc);
        finishBtn.addEventListener('click', finishFnc);
        clearBtn.addEventListener('click', clearFnc);
        


        function startFnc(e){
            e.target.disabled = true;
            finishBtn.disabled = false;   
        }
        function finishFnc(e){
            let copyOfDiv = newDiv.cloneNode(true);
            Array.from(copyOfDiv.getElementsByTagName('button')).forEach(x => x.remove());
            e.target.parentNode.remove();
            completedOrdersSection.appendChild(copyOfDiv);
        }
        function clearFnc(e){
            Array.from(completedOrdersSection.getElementsByTagName('div')).forEach(x => x.remove());
        }
    }
}