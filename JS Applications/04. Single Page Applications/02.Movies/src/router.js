export function initialize(links) {
  const head = document.querySelector('head');
  const main = document.querySelector("main");
  const nav = document.querySelector('nav')
  nav.addEventListener("click", onNavigate);

  const context = {
    showSection,
    goTo,
    updateNav
  };

  return context;

  function showSection(section) {
    main.replaceChildren(section);
  }

  function onNavigate(e) {
    let target = e.target;
    if (target.tagName == "A") {
      e.preventDefault();
      const url = new URL(target.href);
      const name = url.pathname;
      goTo(name);
    }
  }

  function goTo(name, ...params) {
    const handler = links[name];
    if (typeof handler == "function") {
      handler(context, ...params);
    }
  }

  function updateNav(){
    const user = sessionStorage.getItem('user');
    if (user){
        document.querySelectorAll('.user').forEach(e => e.style.display = 'block')
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none')
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none')
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'block')
    }
}

function showHead(){
  head.style.display = 'block'
}
}



