import { users } from "./users.js";
const formLogin = document.querySelector("#form_login");
const hint = document.querySelector("#emailHelp");
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.dir(event.target[0].value);
  const currentUser = {
    login: event.target[0].value,
    password: event.target[1].value,
  };
  // console.log(formData);
  for (let i = 0; i < users.length; i++) {
    if (
      currentUser.login === users[i].login &&
      currentUser.password === users[i].password
    ) {
      sessionStorage.setItem("currentUser", currentUser.login);
      window.location.href = "../index.html";
      break;
    } else {
      hint.innerHTML = "Неверный логин или пароль";
      event.target[0].value = "";
      event.target[1].value = "";
    }
  }
});
