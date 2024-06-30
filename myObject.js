const merge = [...new Set([...a, ...b])];
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);