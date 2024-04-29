const flattenedArray = arr => [].concat(...arr);
const isEven = (num) => num % 2 === 0;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];