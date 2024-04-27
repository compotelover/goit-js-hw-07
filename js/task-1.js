const categoriesList = document.querySelector("#categories");

const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item, index) => {
    const title = item.querySelector("h2").textContent;
    const itemsLength = item.querySelectorAll("li").length;
    console.log(`Сategory: ${title}`);
    console.log(`Elements: ${itemsLength}`);
})