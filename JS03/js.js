let surname = prompt('ваша Фамилия');
let name = prompt('ваше Имя');
let surSurname = prompt('ваше Отчество');
let age = prompt('ваш Возраст');
let gender = confirm('ваш пол мужской?');

if (name && surname && surSurname && age <= 65) {
  alert(
    `${'ваше ФИО: ' + surname + ' ' + name + ' ' + surSurname}
${'ваш возраст в годах: ' + age} 
${'ваш возраст в днях: ' + age * 365} 
${'через пять лет вам будет: ' + (+age + 5)} 
${'ваш пол: мужской'}
${'вы на пенсии: нет'}`
  );
}
