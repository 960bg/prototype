// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

function multiplyNumeric(object) {
  for (const key in object) {
    if (typeof object[key] === 'number') {
      object[key] *= 2;
    }
  }
}

console.log(menu);
