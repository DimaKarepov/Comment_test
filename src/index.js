import { toDoList } from "./data/data.js";
import { init } from "./index_init.js";

const runApp = () => {
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
runApp();
