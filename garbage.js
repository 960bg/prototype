import { PerformanceObserver } from 'node:perf_hooks';

// Создаем наблюдатель за событиями GC
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  //   const entries = list.detail();
  for (const entry of entries) {
    console.log('--- Сборка мусора ---');
    console.log(`Тип: ${entry.detail.kind}`); // MinorGC (молодое поколение) или MajorGC (старое)
    console.log(`Длительность: ${entry.duration.toFixed(2)} мс`);
    console.log(`Время начала: ${entry.startTime}`);
  }
});

// Начинаем наблюдение
obs.observe({ entryTypes: ['gc'] });

let delObject = { my: 'object weakref' };
const weakref = new WeakRef(delObject);
delObject = null;

let timer = 0;
const intervalId = setInterval(() => {
  timer++;
  console.log(timer, weakref?.deref());
  console.log(process.memoryUsage());
}, 1000);

const timeoutId = setTimeout(() => {
  console.log('конец', weakref?.deref());
  clearInterval(intervalId);
  console.log(process.memoryUsage());
}, 150 * 1000);

setTimeout(() => {
  console.log('5 секунд прошло. Запуск сборщика мусора');
  globalThis.gc();
}, 5000);

setTimeout(() => {
  clearInterval(intervalId);
  clearInterval(timeoutId);

  console.log('9 секунд прошло. Удалить таймер');
}, 9000);
