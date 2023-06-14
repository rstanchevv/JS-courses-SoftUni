window.addEventListener("load", solve);

function solve() {
  let postTitleElement = document.getElementById('post-title');
  let categoryElement = document.getElementById('post-category');
  let postContentElement = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');
  let reviewListSection = document.getElementById('review-list')
  let publishedListSection = document.getElementById('published-list')
  let clearBtn = document.getElementById('clear-btn')

  publishBtn.addEventListener('click', publishFnc)
  function publishFnc(){
    if (!postTitleElement.value || !categoryElement.value || !postContentElement.value){
      return;
    }
    let title = postTitleElement.value;
    let category = categoryElement.value;
    let postContent = postContentElement.value;

    postTitleElement.value = '';
    categoryElement.value = '';
    postContentElement.value = '';

    let liElement = document.createElement('li');
    liElement.classList.add(`rpost`);
    let articleItem = document.createElement('article');
    let titleItem = document.createElement('h4');
    titleItem.textContent = title;
    let categoryItem = document.createElement('p');
    categoryItem.textContent = `Category: ${category}`
    let postContentItem = document.createElement('p');
    postContentItem.textContent = `Content: ${postContent}`
    articleItem.appendChild(titleItem)
    articleItem.appendChild(categoryItem)
    articleItem.appendChild(postContentItem)

    let editBtn = document.createElement('button');
    editBtn.classList = 'action-btn edit';
    editBtn.textContent = 'Edit'

    let approveBtn = document.createElement('button');
    approveBtn.classList = 'action-btn approve'
    approveBtn.textContent = 'Approve'

    liElement.appendChild(articleItem)
    liElement.appendChild(editBtn)
    liElement.appendChild(approveBtn)
    reviewListSection.appendChild(liElement)


    editBtn.addEventListener('click', editFnc);
    approveBtn.addEventListener('click', approveFnc);
    clearBtn.addEventListener('click', clearFnc)

    function editFnc(e){
      e.target.parentNode.remove();
      postTitleElement.value = title;
      categoryElement.value = category;
      postContentElement.value = postContent;
    }
    function approveFnc(e){
      e.target.parentNode.remove();
      publishedListSection.appendChild(liElement);
      let targetLiItem = document.querySelector('.rpost');
      Array.from(targetLiItem.querySelectorAll('button')).forEach(x => x.remove());
    }
    function clearFnc(e){
      Array.from(publishedListSection.children).forEach(x => x.remove())
    }
  }
}
