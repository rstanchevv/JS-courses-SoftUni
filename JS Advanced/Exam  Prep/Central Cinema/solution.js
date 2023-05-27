function solve() {
    let addBtn = document.querySelector('#container>button');
    let movieNameElement = document.querySelector('#container>:nth-child(1)');
    let hallNameElement = document.querySelector('#container>:nth-child(2)');
    let moivePriceElement = document.querySelector('#container>:nth-child(3)');
    let onScreensSection = document.querySelector('#movies>ul');
    let archiveSection = document.querySelector('#archive>ul');
    let archiveSectionAll = document.querySelectorAll('#archive>ul')
    let clearBtn = document.querySelector('#archive>button');
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Array.from(archiveSectionAll).forEach(x => x.remove())
    })
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let movieName = movieNameElement.value;
        let hallName = hallNameElement.value;
        let moviePrice = moivePriceElement.value;
        if ((movieName && hallName && moviePrice) && (!isNaN(Number(moviePrice)))){
            movieNameElement.value = '';
            hallNameElement.value = '';
            moivePriceElement.value = ''
            onScreensSection.appendChild(generateMovie(movieName, hallName, moviePrice));
        }
    })
    function generateMovie(name,hall,price){
        let liElement = document.createElement('li');
        let spanElement = document.createElement('span');
        spanElement.textContent = name;
        let strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${hall}`
        let divElement = document.createElement('div');
        let aStrongElement = document.createElement('strong');
        aStrongElement.textContent = `${(Number(price).toFixed(2))}`
        let inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold';
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', () => {
            if (inputElement.value && (!isNaN(Number(inputElement.value)))){
                liElement.remove();
                let totalSum = Number(inputElement.value) * Number(price);
                let liElements = document.createElement('li');
                let spanElement = document.createElement('span');
                spanElement.textContent = name;
                let strongElement = document.createElement('strong');
                strongElement.textContent = `Total amount: ${totalSum.toFixed(2)}`;
                let deleteBtnElement = document.createElement('button');
                deleteBtnElement.textContent = 'Delete';
                deleteBtnElement.addEventListener('click', () => {
                    liElements.remove()
                })
                liElements.appendChild(spanElement);
                liElements.appendChild(strongElement);
                liElements.appendChild(deleteBtnElement)
                return archiveSection.appendChild(liElements)
            }
        });
        divElement.appendChild(aStrongElement)
        divElement.appendChild(inputElement)
        divElement.appendChild(archiveBtn);
        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(divElement)
        return liElement;
    }
}