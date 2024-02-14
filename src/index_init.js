export const init = () => {
  const cardContainer = document.querySelector("#card_container");
  const selectEmail = document.querySelector("#select_email");
  const inputFind = document.querySelector("#input_find");
  const cleanTextInput = document.querySelector("#clean_input");

  const renderSelectOptions = (toDoArray) => {
    const emailsNoDouble = Array.from(
      new Set(toDoArray.map((element) => element.email))
    );
    const optionsArray = emailsNoDouble.map((email) => {
      const option = document.createElement("option");
      option.innerHTML = email;
      option.setAttribute("value", email);
      return option;
    });
    selectEmail.innerHTML = '<option selected value="">Select email</option>';
    selectEmail.append(...optionsArray);
  };
  const renderCards = (toDoArray) => {
    // const filteredToDos = toDoArray.filter((element) => {
    //   return (
    //     element.email.toLowerCase().includes(inputValue.toLowerCase()) ||
    //     element.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    //     element.body.toLowerCase().includes(inputValue.toLowerCase())
    //   );
    // });
    cardContainer.innerHTML = toDoArray.reduce((result, elem) => {
      return (
        result +
        `<div class="card">
                <div class="card-header">${elem.email}</div>
                <div class="card-body">
                  <h5 class="card-title">${elem.name}</h5>
                  <p class="card-text">
                  ${elem.body}
                  </p>
                  <a href="./comment/comment.html?commentId=${elem.id}" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
      );
    }, "");
  };
  const filterToDoList = (toDoArray, filtredValue) => {
    return toDoArray.filter((elem) => {
      return (
        elem.email.toLowerCase().includes(filtredValue.toLowerCase()) ||
        elem.name.toLowerCase().includes(filtredValue.toLowerCase()) ||
        elem.body.toLowerCase().includes(filtredValue.toLowerCase())
      );
    });
  };
  return {
    selectEmail,
    inputFind,
    cleanTextInput,
    renderCards,
    renderSelectOptions,
    filterToDoList,
  };
};
