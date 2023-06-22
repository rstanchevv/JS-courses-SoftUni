function solve() {
    let infoElement = document.querySelector('.info')
    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')

    let nextStop = 'depot'
    let arrival = ''

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
        .then(res => {
            if (res.ok){
                return res.json()
            } else {
                infoElement.textContent = 'Error'
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            }
        })
        .then(data => {
            infoElement.textContent = `Next stop ${data.name}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;
            arrival = data.name;
            nextStop = data.next;
        })
        .catch(error => {
            infoElement.textContent = 'Error'
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    function arrive() {
        infoElement.textContent = `Arriving At ${arrival}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();