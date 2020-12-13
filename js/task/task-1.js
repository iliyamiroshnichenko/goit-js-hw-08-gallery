const itemsRef = document.querySelectorAll(".item");
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach((item) => {
  const titleRef = item.querySelector("h2");
  const subItemsRef = item.querySelectorAll("li");
  console.log(
    `Категория: ${titleRef.textContent}\nКоличество элементов: ${subItemsRef.length}`
  );
});

