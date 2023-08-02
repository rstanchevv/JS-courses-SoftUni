window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  document.getElementById('user').style.display = 'none';
  const form = document.querySelector("form");
  form.addEventListener("submit", onLogin);
});

async function onLogin(e) {
  e.preventDefault();
  const fields = new FormData(e.target);
  const fieldsData = Object.fromEntries(fields);
  const notificationP = document.querySelector('.notification');

  if (!fieldsData.email) {
    notificationP.textContent = "Missing email";
  } else if (!fieldsData.password) {
    notificationP.textContent = "Missing password";
  }

  if (fieldsData.email && fieldsData.password) {
    try {
      let postObj = {
        email: fieldsData.email,
        password: fieldsData.password,
      };
      const response = await fetch("http://localhost:3030/users/login", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(postObj),
      });
      if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const data = await response.json();

      const userData = {
        email: data.email,
        id: data._id,
        token: data.accessToken,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "/index.html";
    } catch (err) {
      alert(err);
    }
  }
}
