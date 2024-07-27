const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);