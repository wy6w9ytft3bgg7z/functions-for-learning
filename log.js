const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;