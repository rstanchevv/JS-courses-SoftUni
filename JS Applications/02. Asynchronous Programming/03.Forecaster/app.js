function attachEvents() {
    let forecastSection = document.getElementById('forecast');
    let locationElement = document.getElementById('location');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitFnc)

    async function submitFnc(e) {
        try {
            if (current.querySelector(':nth-child(2)')) {
                current.querySelector(':nth-child(2)').remove()
            }

            if (upcoming.querySelector(':nth-child(2)')) {
                upcoming.querySelector(':nth-child(2)').remove()
            }

            const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            if (response.ok == false) {
                console.log(`error`)
            }
            const data = await response.json();
            let findElement = data.find(x => x.name === locationElement.value);

            const response1 = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${findElement.code}`)
            const data1 = await response1.json();

            console.log(data1)

            let condition = data1.forecast.condition;
            forecastSection.style.display = 'block';

            let newDiv = document.createElement('div');
            newDiv.classList.add('forecasts');
            let symbol = document.createElement('span');
            symbol.classList = 'condition symbol';

            switch (condition) {
                case "Sunny": symbol.innerHTML = '&#x2600;'; break;
                case "Partly sunny": symbol.innerHTML = '&#x26C5;'; break;
                case "Overcast": symbol.innerHTML = '&#x2601;'; break;
                case "Rain": symbol.innerHTML = '&#x2614;'; break;
                case "Sunny": symbol.innerHTML = '&#x2600;'; break;
            }

            let newSpan = document.createElement('span');
            newSpan.classList = 'condition';

            let forecastData = document.createElement('span');
            forecastData.classList = 'forecast-data';
            forecastData.textContent = data1.name;

            let degrees = document.createElement('span');
            degrees.classList = 'forecast-data';
            degrees.innerHTML = `${data1.forecast.low}&#176;/${data1.forecast.high}&#176;`

            let conditions = document.createElement('span');
            conditions.classList = 'forecast-data';
            conditions.textContent = data1.forecast.condition;

            newSpan.appendChild(forecastData)
            newSpan.appendChild(degrees)
            newSpan.appendChild(conditions)

            newDiv.appendChild(symbol);
            newDiv.appendChild(newSpan);
            current.appendChild(newDiv)

            let secondDiv = document.createElement('div');
            secondDiv.classList = 'forecast-info'

            const response2 = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${findElement.code}`)
            const data2 = await response2.json()
            data2.forecast.forEach(forecast => {
                let condition = forecast.condition;
                let newSpan = document.createElement('span');
                newSpan.classList = 'upcoming';

                let symbol = document.createElement('span');
                symbol.classList = 'symbol';

                switch (condition) {
                    case "Sunny": symbol.innerHTML = '&#x2600;'; break;
                    case "Partly sunny": symbol.innerHTML = '&#x26C5;'; break;
                    case "Overcast": symbol.innerHTML = '&#x2601;'; break;
                    case "Rain": symbol.innerHTML = '&#x2614;'; break;
                    case "Sunny": symbol.innerHTML = '&#x2600;'; break;
                }

                let degrees = document.createElement('span');
                degrees.classList = 'forecast-data';
                degrees.innerHTML = `${forecast.low}&#176;/${forecast.high}&#176;`

                let conditions = document.createElement('span');
                conditions.classList = 'forecast-data';
                conditions.textContent = forecast.condition;

                newSpan.appendChild(symbol)
                newSpan.appendChild(degrees)
                newSpan.appendChild(conditions)

                secondDiv.appendChild(newSpan);
                upcoming.appendChild(secondDiv)
            })
        } catch(err) {
            forecastSection.style.display = 'block'
            forecastSection.textContent = 'Error'
        }
        
        }
    }

    attachEvents()