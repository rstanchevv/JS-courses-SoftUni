import { goToTwentyTwenty } from "./2020.js";
import { goToTwentyTwentyOne } from "./2021.js";
import { goToTwentyTwentyTwo } from "./2022.js";
import { goToTwentyTwentyThree } from "./2023.js";

let yearsSection = document.getElementById('years');
yearsSection.style.display = 'block'

let calendarTable = document.querySelector('.calendar');
calendarTable.addEventListener('click', (e) => {
    if (e.target.nodeName === 'DIV' && e.target.textContent === '2020'){
        goToTwentyTwenty()
    } else if (e.target.nodeName === 'DIV' && e.target.textContent === '2021'){
        goToTwentyTwentyOne();
    } else if (e.target.nodeName === 'DIV' && e.target.textContent === '2022'){
        goToTwentyTwentyTwo();
    } else if (e.target.nodeName === 'DIV' && e.target.textContent === '2023'){
        goToTwentyTwentyThree();
    }
})










