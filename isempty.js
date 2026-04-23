// Напишите функцию isEmpty(obj),
// которая возвращает true,
// если у объекта нет свойств, иначе false.

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

const o = {};

console.log(isEmpty(o));
