// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor(random) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bgColorName: document.querySelector('.color'),
  btnColorClicker: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};
let clickNumber = 0;

refs.btnColorClicker.addEventListener('click', bodyClickChangeBgColour);

function bodyClickChangeBgColour() {
  clickNumber += 1;
  refs.bgColorName.textContent = getRandomHexColor(clickNumber);
  refs.body.style.backgroundColor = getRandomHexColor(clickNumber);
}
