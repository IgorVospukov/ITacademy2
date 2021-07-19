let surname = prompt('ваша Фамилия');
let name = prompt('ваше Имя');
let surSurname = prompt('ваше Отчество');
let age = prompt('ваш Возраст');
let gender = confirm('ваш пол мужской?');

if (gender == true && age < 65) {
  alert(
    'ваше ФИО: ' +
      surname +
      ' ' +
      name +
      ' ' +
      surSurname +
      '\n' +
      'ваш возраст в годах: ' +
      age +
      '\n' +
      'ваш возраст в днях: ' +
      age * 365 +
      '\n' +
      'через пять лет вам будет: ' +
      (+age + 5) +
      '\n' +
      'ваш пол: мужской' +
      '\n' +
      'вы на пенсии: нет'
  );
}
