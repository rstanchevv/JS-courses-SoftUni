function commonElements(arr, arr2){
    for (const element of arr) {
        let duplicates = arr2.includes(element)
        if(duplicates === true){
            console.log(element)
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)