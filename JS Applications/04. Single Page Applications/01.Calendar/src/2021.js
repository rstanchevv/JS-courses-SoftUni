export function goToTwentyTwentyOne(){
    const twentyTwentyYear = document.getElementById('year-2021');
    const caption = document.querySelector('#year-2021>.calendar>caption');
    const calendar = document.querySelector('#year-2021>.calendar');
    [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
    twentyTwentyYear.style.display = 'block'
    calendar.addEventListener('click', goToMontn)
    caption.addEventListener('click', returnToHome)
}


function returnToHome(){
    [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
    let yearsSection = document.getElementById('years');
    yearsSection.style.display = 'block'
}

function goToMontn(e){
    switch(e.target.textContent){
        case "Jan": 
        document.querySelector('#month-2021-1>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-1').style.display = 'block';
        break;
        case "Feb": 
        document.querySelector('#month-2021-2>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-2').style.display = 'block';
        break;
        case "Mar": 
        document.querySelector('#month-2021-3>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-3').style.display = 'block';
        break;
        case "Apr": 
        document.querySelector('#month-2021-4>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-4').style.display = 'block';
        break;
        case "May": 
        document.querySelector('#month-2021-5>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-5').style.display = 'block';
        break;
        case "Jun": 
        document.querySelector('#month-2021-6>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-6').style.display = 'block';
        break;
        case "Jul": 
        document.querySelector('#month-2021-7>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-7').style.display = 'block';
        break;
        case "Aug": 
        document.querySelector('#month-2021-8>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-8').style.display = 'block';
        break;
        case "Sept": 
        document.querySelector('#month-2021-9>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-9').style.display = 'block';
        break;
        case "Oct": 
        document.querySelector('#month-2021-10>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-10').style.display = 'block';
        break;
        case "Nov": 
        document.querySelector('#month-2021-11>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-11').style.display = 'block';
        break;
        case "Dec": 
        document.querySelector('#month-2021-12>.calendar>caption').addEventListener('click', goToTwentyTwentyOne);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2021-12').style.display = 'block';
        break;
    }
}
