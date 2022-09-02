// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const bodyListEl = document.querySelector('.gallery');

// const creatorImgEl = images =>
//   images.map(({ url, alt }) => {
//     const itemEl = document.createElement('li');
//     const imgEl = document.createElement('img');
//     imgEl.url = url;
//     imgEl.alt = alt;

//     console.log(imgEl);
//   });

// creatorImgEl(images);

const creatoreImgEl = images =>
  images
    .map(
      ({ url, alt }) => `<li>
      <img
        src="${url}"
        alt="${alt}"
        width=" 100%"
      />
    </li>`,
    )
    .join('');

bodyListEl.insertAdjacentHTML('beforeend', creatoreImgEl(images));

const stylish = bodyListEl.style;
stylish.display = 'grid';
stylish.listStyle = 'none';
stylish.gridGap = '10px';
stylish.gridTemplateColumns = 'repeat(3, 1fr)';
stylish.gridTemplateRows = '100vh';

// grid-template-rows: 40vh 30vh 30vh;

console.log(bodyListEl);
