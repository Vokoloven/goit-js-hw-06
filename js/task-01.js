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

const list = document.querySelector('ul#categories');
const items = document.querySelectorAll('li.item');

console.log(`Number of categories: ${list.children.length}`);

for (let i = 0; i < items.length; i += 1) {
  console.log(`Category: ${items[i].firstElementChild.textContent}`);
  console.log(`Elements: ${items[i].lastElementChild.children.length}`);
}
