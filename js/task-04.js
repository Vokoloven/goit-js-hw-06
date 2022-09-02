// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушате ли кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значениемпеременной counterValue.

const dectBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('span#value');

let counterValue = 0;

const minusOne = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const plusOne = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

dectBtn.addEventListener('click', minusOne);
incrBtn.addEventListener('click', plusOne);
