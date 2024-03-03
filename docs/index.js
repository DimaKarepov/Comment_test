// import { toDoList } from "./data/data.js";
import { init } from "./index_init.js";

const runApp = (toDoList) => {
  const {
    selectEmail,
    inputFind,
    cleanTextInput,
    renderCards,
    renderSelectOptions,
    filterToDoList,
  } = init();

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    const filteredToDoList = filterToDoList(toDoList, newInputValue);

    renderCards(filteredToDoList);
    renderSelectOptions(filteredToDoList);
    selectEmail.value = "";
  };

  const handleSelectChange = (event) => {
    const newSelectValue = event.target.value;
    const filteredToDoList = filterToDoList(toDoList, newSelectValue);

    renderCards(filteredToDoList);
    inputFind.value = "";

    if (newSelectValue === "") {
      renderSelectOptions(toDoList);
    }
  };

  renderSelectOptions(toDoList);
  renderCards(toDoList);

  inputFind.addEventListener("input", handleInputChange);
  selectEmail.addEventListener("change", handleSelectChange);
  cleanTextInput.addEventListener("click", () => {
    inputFind.value = "";
    renderCards(toDoList);
    renderSelectOptions(toDoList);
  });
};
// runApp();

const runQuery = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      console.log("Обещание выполнено", response);
      return response.json();
    })
    .catch(() => {
      console.log("Обещание не выполнено");
    })
    .finally(() => {
      console.log("Обещание закончено");
    })
    .then((toDoList) => {
      runApp(toDoList);
    });
};

const currentUser = sessionStorage.getItem("currentUser");
if (currentUser) {
  runQuery();
} else {
  window.location.href = "login/login.html";
}
