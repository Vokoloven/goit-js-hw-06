// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('div#boxes'),
};

console.log((refs.boxes.style.display = 'flex'));
console.log((refs.boxes.style.alignItems = 'center'));

// console.log((refs.boxes.style.border = '10px'));
// console.log((refs.boxes.style.backgroundColor = 'black'));
// console.log((refs.boxes.style.width = '1000px'));
// console.log((refs.boxes.style.height = '1000px'));

// refs.boxes.append(document.createElement('div'));
// refs.boxes.children[0].style.backgroundColor = 'tomato';
// refs.boxes.children[0].style.width = '100px';
// refs.boxes.children[0].style.height = '100px';

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});

function createBoxes() {
  const amount = refs.input.value;
  let sizer = 20;

  for (let i = 0; i <= amount; i += 1) {
    // refs.boxes.insertAdjacentHTML(
    //   'beforeend',
    //   '<div class="custom-box"></div>',
    // );
    sizer += 10;
    refs.boxes.append(document.createElement('div'));
    refs.boxes.children[i].style.width = `${sizer}px`;
    refs.boxes.children[i].style.height = `${sizer}px`;
    refs.boxes.children[i].style.backgroundColor = `${getRandomHexColor([i])}`;
  }
}

console.log(refs.boxes.children);
