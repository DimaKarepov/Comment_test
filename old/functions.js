const wrapperNode = document.querySelector(".wrapper");
const buttonNode = document.querySelector("#click_button");
const oddButtonNode = document.querySelector("#kick_odd");
console.dir(wrapperNode);
let counter = 1;
let color = [255, 150, 200];
buttonNode.addEventListener("click", () => {
  wrapperNode.innerHTML += `<div style="background-color: rgb(${color[0]}, ${color[1]}, ${color[2]})" class="container">${counter}</div>`;
  counter++;
  color[0] -= 20;
  color[1] += 20;
  color[2] -= 20;
});
oddButtonNode.addEventListener("mouseenter", () => {
  wrapperNode.querySelectorAll("div").forEach((element, index) => {
    if (index % 2 === 0) {
      //   console.log(index);
      element.style.display = "none";
    }
  });
  //   console.dir(wrapperNode);
});
oddButtonNode.addEventListener("mouseleave", () => {
  wrapperNode.querySelectorAll("div").forEach((element, index) => {
    element.style.display = "flex";
  });
});
//   setTimeout(() => {
//     wrapperNode.innerHTML =
//       wrapperNode.innerHTML +
//       `<div style="background-color: grey" class="container">4</div>`;
//   }, 5000);
