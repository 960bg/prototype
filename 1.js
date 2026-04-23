// Создайте пустой объект user.
const user = {};
const user2 = new Object();

// Добавьте свойство name со значением John.
user.name = 'john';
console.log(tostr(user));

// Добавьте свойство surname со значением Smith.
user.surname = 'Smith';
console.log(tostr(user));

// Измените значение свойства name на Pete.
user.name = 'Pete';
console.log(tostr(user));

// Удалите свойство name из объекта.
delete user.name;
console.log(tostr(user));

function tostr(object) {
  return JSON.stringify(object);
}
