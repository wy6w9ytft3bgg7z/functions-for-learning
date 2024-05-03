const randomString = () => Math.random().toString(36).slice(2);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;