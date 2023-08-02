function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts')
    let btnViewPosts = document.getElementById('btnViewPost')
    let postsElement = document.getElementById('posts');
    let postTitle = document.getElementById('post-title')
    let postComments = document.getElementById('post-comments')
    let postBodyElement = document.getElementById('post-body');
    btnLoadPosts.addEventListener('click', loadPostsFnc);
    btnViewPosts.addEventListener('click', viewPostsFnc)

    let body = ''

    async function loadPostsFnc(e){
        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const data = await response.json();

        Object.entries(data).forEach(obj => {
            let optionElement = document.createElement('option');
            optionElement.value = obj[0];
            optionElement.textContent = obj[1].title;
            postsElement.appendChild(optionElement)
            body = obj[1].body;
        })
    }
    async function viewPostsFnc(e){
        postComments.replaceChildren()
        let id = postsElement.value;
        const response = await fetch (`http://localhost:3030/jsonstore/blog/comments/`);
        const data = await response.json();
        let postIds = [];
        Object.keys(data).forEach(postId => {
            if (id === data[postId].postId){
                postIds.push(data[postId])
            }
        })
        let title = postsElement.querySelector('option:checked');
        postTitle.textContent = title.textContent
        postBodyElement.textContent = body

        postIds.forEach(respId => {
            let newLi = document.createElement('li');
            newLi.id = respId.id
            newLi.textContent = respId.text;
            postComments.appendChild(newLi)
        })
    }
}

attachEvents();