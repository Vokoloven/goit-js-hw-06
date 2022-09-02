// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.
// element.querySelector(selector);
// element.querySelectorAll(selector);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const numOfCategories = document.querySelectorAll('li.item');
const nameOfCategories = document.querySelectorAll('h2');
const qtyOfElements = document.querySelectorAll('ul');

console.log(`Number of categories: ${numOfCategories.length}`);
console.log(`Category: ${nameOfCategories[0].textContent}`);
console.log(`Elements: ${qtyOfElements[1].children.length}`);
console.log(`Category: ${nameOfCategories[1].textContent}`);
console.log(`Elements: ${qtyOfElements[2].children.length}`);
console.log(`Category: ${nameOfCategories[2].textContent}`);
console.log(`Elements: ${qtyOfElements[3].children.length}`);

// for (let i = 0; i < nameOfCategories.length; i += 1) {
//   console.log(`Category: ${nameOfCategories[i].textContent}`);
// }
// for (let i = 1; i < qtyOfElements.length; i += 1) {
//   console.log(`Elements: ${qtyOfElements[i].children.length}`);
// }
