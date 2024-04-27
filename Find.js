const getRandomBoolean = () => Math.random() >= 0.5;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const merge = Object.assign({}, obj1, obj2);
const buildOutputPath = path.join(repositoryRootPath, 'out');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var regexp  = new RegExp('{{([^}]+)}}', 'g');