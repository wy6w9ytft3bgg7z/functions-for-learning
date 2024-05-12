var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());