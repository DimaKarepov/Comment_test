// import { toDoList } from "./data/data.js";
import { init, renderLoaders } from "./index_init.js";

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

const runQuery = async () => {
  renderLoaders();
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    if (response.status === 200) {
      console.log("Обещание выполнено", response);
      runApp(await response.json());
    } else if (response.status === 404) {
      throw new Error("Комментарий не найден");
    } else {
      throw new Error("Что-то пошло не так");
    }
  } catch (error) {
    renderCommentInfo(error);
  }
};

const currentUser = sessionStorage.getItem("currentUser");
if (currentUser) {
  runQuery();
} else {
  window.location.href = "login/login.html";
}
