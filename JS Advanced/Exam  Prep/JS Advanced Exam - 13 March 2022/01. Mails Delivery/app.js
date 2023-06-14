function solve() {
  let recipientElement = document.getElementById("recipientName");
  let titleELement = document.getElementById("title");
  let messageELement = document.getElementById("message");
  let addBtn = document.getElementById("add");
  let resetBtn = document.getElementById("reset");
  let listMailsSection = document.getElementById('list')
  let sentListSection = document.querySelector('.sent-list')
  let deleteListSection = document.querySelector('.delete-list')

  addBtn.addEventListener("click", addFnc);
  resetBtn.addEventListener("click", resetFnc);

  function resetFnc(e) {
    e.preventDefault();
    recipientElement.value = "";
    titleELement.value = "";
    messageELement.value = "";
  }

  function addFnc(e) {
    e.preventDefault();
    if (
      !recipientElement.value ||
      !titleELement.value ||
      !messageELement.value
    ) {
      return;
    }
    let recipient = recipientElement.value;
    let title = titleELement.value;
    let message = messageELement.value;

    recipientElement.value = "";
    titleELement.value = "";
    messageELement.value = "";

    let liItem = document.createElement("li");
    let titleItem = document.createElement("h4");
    titleItem.textContent = `Title: ${title}`;

    let recipientItem = document.createElement("h4");
    recipientItem.textContent = `Recipient Name: ${recipient}`;

    let messageItem = document.createElement("span");
    messageItem.textContent = message;

    let divItem = document.createElement("div");
    divItem.id = "list-action";

    let sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.type = "submit";
    sendBtn.id = 'send'

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "submit";
    deleteBtn.id = 'delete'

    divItem.appendChild(sendBtn);
    divItem.appendChild(deleteBtn);

    liItem.appendChild(titleItem);
    liItem.appendChild(recipientItem);
    liItem.appendChild(messageItem);
    liItem.appendChild(divItem);
    listMailsSection.appendChild(liItem);

    sendBtn.addEventListener('click', sendFnc);
    deleteBtn.addEventListener('click', deleteFnc);


    function sendFnc(e){
        e.target.parentNode.parentNode.remove()
        let sentLiItem = document.createElement('li');
        let toItem = document.createElement('span');
        toItem.textContent = `To: ${recipient}`
        let titleItem = document.createElement('span');
        titleItem.textContent = `Title: ${title}`
        let divItem = document.createElement('div');
        divItem.classList = 'btn';
        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.classList = 'delete';
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteFnc)
        
        divItem.appendChild(deleteBtn);
        sentLiItem.appendChild(toItem)
        sentLiItem.appendChild(titleItem)
        sentLiItem.appendChild(divItem)
        sentListSection.appendChild(sentLiItem)
    }
    function deleteFnc(e){
        e.target.parentNode.parentNode.remove();
        let liItem = document.createElement('li');
        let toItem = document.createElement('span');
        toItem.textContent = `To: ${recipient}`
        let titleItem = document.createElement('span');
        titleItem.textContent = `Title: ${title}`
        liItem.appendChild(toItem);
        liItem.appendChild(titleItem);

        deleteListSection.appendChild(liItem)
    }
  }
}
solve();
