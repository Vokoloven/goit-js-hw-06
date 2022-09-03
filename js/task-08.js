// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userData = event.currentTarget.elements;
  const fieldMailTitle = userData[0].attributes.name.value;
  const fieldPassTitle = userData[1].attributes.name.value;

  const userMail = userData.email.value;
  const userPass = userData.password.value;

  const userInfo = {};

  if (!userData.email.value) {
    alert('Please fill all necessary fields');
  } else if (!userData.password.value) {
    alert('Please fill all necessary fields');
  } else {
    userInfo[fieldMailTitle] = userMail;
    userInfo[fieldPassTitle] = userPass;
    form.reset();
    console.log(userInfo);
  }

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(value);
  //   console.log(name);
  //   if (!value) {
  //     alert('Pls fill the fields');
  //   }
  // });
}
