function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mouseover', (e) => {
        console.log(e)
    })
}