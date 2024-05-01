const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const timeFromDate = date => date.toTimeString().slice(0, 8);
const randomString = () => Math.random().toString(36).slice(2);