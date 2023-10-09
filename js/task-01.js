

const categoriesList = document.getElementById("categories").children;

console.log(`Number of categories: ${categoriesList.length}`);

for (const category of categoriesList) {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelector("ul").children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
