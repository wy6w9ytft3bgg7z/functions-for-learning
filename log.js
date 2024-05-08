const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const randomBoolean = () => Math.random() >= 0.5;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();