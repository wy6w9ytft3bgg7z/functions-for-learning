const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;