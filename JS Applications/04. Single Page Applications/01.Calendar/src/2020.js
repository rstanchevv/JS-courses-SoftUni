export function goToTwentyTwenty(){
    const twentyTwentyYear = document.getElementById('year-2020');
    const caption = document.querySelector('#year-2020>.calendar>caption');
    const calendar = document.querySelector('#year-2020>.calendar');
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
        document.querySelector('#month-2020-1>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-1').style.display = 'block';
        break;
        case "Feb": 
        document.querySelector('#month-2020-2>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-2').style.display = 'block';
        break;
        case "Mar": 
        document.querySelector('#month-2020-3>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-3').style.display = 'block';
        break;
        case "Apr": 
        document.querySelector('#month-2020-4>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-4').style.display = 'block';
        break;
        case "May": 
        document.querySelector('#month-2020-5>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-5').style.display = 'block';
        break;
        case "Jun": 
        document.querySelector('#month-2020-6>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-6').style.display = 'block';
        break;
        case "Jul": 
        document.querySelector('#month-2020-7>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-7').style.display = 'block';
        break;
        case "Aug": 
        document.querySelector('#month-2020-8>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-8').style.display = 'block';
        break;
        case "Sept": 
        document.querySelector('#month-2020-9>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-9').style.display = 'block';
        break;
        case "Oct": 
        document.querySelector('#month-2020-10>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-10').style.display = 'block';
        break;
        case "Nov": 
        document.querySelector('#month-2020-11>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-11').style.display = 'block';
        break;
        case "Dec": 
        document.querySelector('#month-2020-12>.calendar>caption').addEventListener('click', goToTwentyTwenty);
        [...document.querySelectorAll('section')].forEach(x => x.style.display = 'none');
        document.getElementById('month-2020-12').style.display = 'block';
        break;
    }
}
