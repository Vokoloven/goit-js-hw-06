// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  inputText: document.querySelector('input#name-input'),
  outputText: document.querySelector('span#name-output'),
};

refs.inputText.addEventListener('input', onFillSpan);

function onFillSpan(e) {
  const currentValue = e.currentTarget.value;

  currentValue === ''
    ? (refs.outputText.textContent = 'Anonymous')
    : (refs.outputText.textContent = currentValue);
}
