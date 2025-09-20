const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
items.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const innerUl = element.querySelector("ul");
  const elements = innerUl.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
