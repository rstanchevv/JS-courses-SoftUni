function getRecipises(){
    let mainElement = document.getElementsByTagName('main>p')[0]
    console.log(mainElement)
    async function createRecipse(){
        const response = await fetch ('http://localhost:3030/jsonstore/cookbook/recipes')
        const data = await response.json();

        console.log(data)

    }
    createRecipse()
    




}
getRecipises();