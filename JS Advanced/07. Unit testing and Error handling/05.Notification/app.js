function notify(message) {
  document.getElementById('notification').style.display = 'block'
  document.getElementById('notification').textContent = message;
  document.getElementById('notification').addEventListener('click', (e) => {
    e.target.style.display = 'none';
  })
}