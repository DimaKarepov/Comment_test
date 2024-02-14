import { toDoList } from "../data/data.js";

const h1Comment = document.querySelector("#comment_from_array");
const h2Email = document.querySelector("#email_from_array");
const pBody = document.querySelector("#body_from_array");

const searcValue = window.location.search
  .slice(1, window.location.search.length)
  .split("&")
  .reduce((obj, elem) => {
    const [key, value] = elem.split("=");
    return { ...obj, [key]: value };
  }, {});

const renderCommentInfo = (toDoArray, id) => {
  const findNecessaryComment = toDoArray.find((elem) => {
    return elem.id === Number(id);
  });
  if (findNecessaryComment) {
    h1Comment.innerHTML = `${findNecessaryComment.name}`;
    h2Email.innerHTML = `${findNecessaryComment.email}`;
    pBody.innerHTML = `${findNecessaryComment.body}`;
  } else {
    h1Comment.innerHTML = "Id not found";
  }
};

renderCommentInfo(toDoList, searcValue.commentId);
