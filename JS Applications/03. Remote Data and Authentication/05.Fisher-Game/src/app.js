let userData = null;

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  const caches = document.querySelector('#catches');
  userData = JSON.parse(localStorage.getItem('userData'));
  caches.replaceChildren()
  document.querySelector('.load').addEventListener('click', onLoad)

  if (userData != null) {
    document.getElementById('guest').style.display = 'none'
    const addBtn = document.querySelector('.add')
    document.getElementById('addForm').addEventListener('submit', onAdd)
    document.getElementById("logout").addEventListener("click", onLogout);
    addBtn.removeAttribute('disabled')
    userData = JSON.parse(localStorage.getItem("userData"));
    document.querySelector(
      '.email'
  ).textContent = `Welcome, ${userData.email}`;
    onLoad()
  } else {
    document.getElementById('user').style.display = 'none'
  }
})

  async function onLogout(e) {
    e.preventDefault();
    try {
    const res = await fetch("http://localhost:3030/users/logout", {
      method: "get",
      headers: {
        "X-Authorization": userData.token
      }
    });
    if (res.status === 204) {
      localStorage.clear();
      window.location.href = '/index.html'
    } else {
      throw new Error ('invalid Logout')
    }
  } catch(err) {
    alert(err)
  }
  }
  
  async function onAdd(e) {
      try {
      e.preventDefault();
      if (!localStorage.getItem('userData')){
        window.location.href = '/index.html'
        return;
      }
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      if (formDataObj.angler === '' || formDataObj.weigth === '' || formDataObj.species === '' || formDataObj.location === ''
      || formDataObj.bait === '' || formDataObj.captureTime === '' || !isNaN(formDataObj.angler) || isNaN(formDataObj.weight) || !isNaN(formDataObj.species)
      || !isNaN(formDataObj.location) || !isNaN(formDataObj.bait) || isNaN(formDataObj.captureTime) ) { 
        throw new Error('All input fields should be filled out correctly.')
      }
      const res = await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          'X-Authorization': userData.token,
        },
        body: JSON.stringify(formDataObj)
      })
      if (res.ok != true) {
        const error = await res.json();
        throw new Error(error.message);
      }
      e.target.reset()
      onLoad()
    } catch(err){
      alert(err)
    }
  }
  
  async function onLoad(){
    try {
      const catches = document.getElementById("catches");
      catches.replaceChildren();
      const res =  await fetch('http://localhost:3030/data/catches');
      if (res.ok != true) {
        const error = await res.json();
        throw new Error(error.message);
      }
      const data = await res.json();
      createDOMCatchers(data)
    } catch (err){
      alert(err)
    }
  }
  function createDOMCatchers(data){
    const catches = document.getElementById("catches");
    for (const catcher of data) {
      let div = document.createElement('div');
      div.classList = 'catch'
      div.innerHTML = `<label>Angler</label>
      <input type="text" class="angler" value="${catcher.angler}">
      <label>Weight</label>
      <input type="text" class="weight" value="${catcher.weight}">
      <label>Species</label>
      <input type="text" class="species" value="${catcher.species}">
      <label>Location</label>
      <input type="text" class="location" value="${catcher.location}">
      <label>Bait</label>
      <input type="text" class="bait" value="${catcher.bait}">
      <label>Capture Time</label>
      <input type="number" class="captureTime" value="${catcher.captureTime}">
      <button disabled="true"class="update" data-id="${catcher._id}">Update</button>
      <button disabled="true"class="delete" data-id="${catcher._id}">Delete</button>`

      div.querySelector('.update').addEventListener('click', onUpdate);
      div.querySelector('.delete').addEventListener('click', onDelete);
  
      if (localStorage.getItem('userData') != null){
        if (catcher._ownerId === localStorage.getItem('userData').id){
          div.querySelectorAll('button').forEach(button => {
            button.removeAttribute('disabled')
          })
        } else {
          div.querySelectorAll('input').forEach(input => {
            input.setAttribute('disabled', 'true')
          })
        }
      } else {
        div.querySelectorAll('input').forEach(input => {
          input.setAttribute('disabled', 'true')
        })
      }
      catches.appendChild(div)
    }
  }
  async function onUpdate(e){
    try{
      if (!localStorage.getItem('userData')){
        window.location.href = '/index.html'
        return;
      }
      const id = e.target.dataset.id
      const parent = e.target.parentElement;
      const inputs = parent.querySelectorAll('input');
      const postData = {
        angler: inputs[0].value,
        weight: inputs[1].value,
        species: inputs[2].value,
        location: inputs[3].value,
        bait: inputs[4].value,
        captureTime: inputs[5].value
      }
      if (postData.angler === '' || postData.weigth === '' || postData.species === '' || postData.location === ''
      || postData.bait === '' || postData.captureTime === '' || !isNaN(postData.angler) || isNaN(postData.weight) || !isNaN(postData.species)
      || !isNaN(postData.location) || !isNaN(postData.bait) || isNaN(postData.captureTime) ) { 
        throw new Error('All input fields should be filled out correctly.')
      }
      const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: "put",
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': userData.token
        },
        body: JSON.stringify(postData)
      })
      if (res.ok != true) {
        const error = await res.json();
        throw new Error(error.message);
      }
      onLoad()
    } catch(err){
      alert(err)
    }
  }
  async function onDelete(e){
    try {    
      if (!localStorage.getItem('userData')){
        window.location.href = '/index.html'
        return;
      }
    const id = e.target.dataset.id
    const res = await fetch (`http://localhost:3030/data/catches/${id}`, {
      method: "Delete",
      headers: {
        'X-Authorization': userData.token
      }
    })
    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    e.target.parentElement.remove();
    onLoad()
  } catch(err) {
    alert(err)
  }
}


