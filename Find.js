var regexp  = new RegExp('{{([^}]+)}}', 'g');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);