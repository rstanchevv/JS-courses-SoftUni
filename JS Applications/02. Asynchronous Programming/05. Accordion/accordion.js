function solution() {
    let mainElement = document.getElementById('main');
    let accordionElement = document.querySelector('.accordion');

    async function createAccordionElement(e){
        const reponse = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const data = await reponse.json();

        for (const element of Object.keys(data)) {
            let identifier = data[element]['_id']
            const secondResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${identifier}`)
            const secondData = await secondResponse.json()

            let newAccordionElement = accordionElement.cloneNode(true);
            let title = newAccordionElement.querySelector(':nth-child(1) span')
            title.textContent = secondData.title;

            let extraText = newAccordionElement.querySelector(':nth-child(2) p');
            extraText.textContent = secondData.content;

            let showMoreButton = newAccordionElement.querySelector(':nth-child(1) button');
            showMoreButton.id = identifier;
            showMoreButton.addEventListener('click', showMoreFnc);

            
            mainElement.appendChild(newAccordionElement)
        }

        function showMoreFnc(e){
            if (e.target.textContent === "More"){
                let extraText = e.target.parentElement.parentElement.querySelector('.extra');
                extraText.style.display = 'block'
                e.target.textContent = 'Hide'
            } else {
                let extraText = e.target.parentElement.parentElement.querySelector('.extra');
                extraText.style.display = 'none'   
                e.target.textContent = 'More'         }
        }
        }
        createAccordionElement()
        mainElement.querySelector(':nth-child(1)').remove()
    }
    

solution()