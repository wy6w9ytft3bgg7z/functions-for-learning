const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const isWeekday = (date) => date.getDay() % 6 !== 0;