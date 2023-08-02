function getInfo() {
    let stopId = document.querySelector(`#stopId`);
    let stopName = document.querySelector('#stopName');
    let bussesElement = document.getElementById('buses')

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                stopName.textContent = 'Error'
            }
        })
        .then(data => {
            stopName.textContent = data.name;
            let entries = Object.entries(data.buses);
            for (const [bus, time] of entries) {
                let newLiItem = document.createElement('li');
                newLiItem.textContent = `Bus ${bus} arrives in ${time} minutes`
                bussesElement.appendChild(newLiItem)
            }
        })
        .catch(err => {
            stopName.textContent = 'Error'
        })
    bussesElement.replaceChildren();
    stopId.value = '';
}


//     // function handleResponse(response){
//     //     if (response.ok === true){
//     //         return response.json();
//     //     } else {
//     //         stopName.textContent = 'Error'
//     //     }
// }
// function handleData(data) {
//     stopName.textContent = data.name;
//     let entries = Object.entries(data.buses);
//     for (const [bus, time] of entries) {
//         let newLiItem = document.createElement('li');
//         newLiItem.textContent = `Bus ${bus} arrives in ${time} minutes`
//         bussesElement.appendChild(newLiItem)
//     }
// }
// function handleError(error) {
//     stopName.textContent = 'Error'
// }
// }