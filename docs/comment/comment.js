// import { toDoList } from "../data/data.js";

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

const renderCommentInfo = (comment) => {
  // const findNecessaryComment = toDoArray.find((elem) => {
  //   return elem.id === Number(id);
  // });
  // console.log(comment);
  if (comment.name) {
    h1Comment.innerHTML = `${comment.name}`;
    h2Email.innerHTML = `${comment.email}`;
    pBody.innerHTML = `${comment.body}`;
  } else {
    h1Comment.innerHTML = "Id not found";
    h2Email.innerHTML = "";
    pBody.innerHTML = "";
  }
};
const runQuery = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );

    renderCommentInfo(await response.json());
  } catch {
    console.log("Обещание не пришло");
  } finally {
    // console.log("Обещание выполнилось");
  }
  // .then((comment) => {
  //   renderCommentInfo(comment);
  // })
};

const currentUser = sessionStorage.getItem("currentUser");
if (currentUser) {
  runQuery(searcValue.commentId);
} else {
  window.location.href = "../login/login.html";
}

// const randomQuerries = async () => {
//   const array = [1, 10, 25, 150, 200, 300];
//   const resultArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // const response = await fetch(
//     await fetch(`https://jsonplaceholder.typicode.com/comments/${array[i]}`)
//       .then((response) => response.json())
//       .then((comment) => (resultArray[i] = comment));
//     // resultArray.push(await response.json());
//   }
//   console.log(resultArray);
// };
// randomQuerries();
