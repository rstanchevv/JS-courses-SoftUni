function getArticleGenerator(articles) {
    let newArr = [...articles]
    let divElement = document.querySelector('#content');
    return function () {
        if (newArr.length !== 0){
        let createArticle = document.createElement('article');
        createArticle.textContent = newArr.shift();
        divElement.appendChild(createArticle);
        }
    }
}
