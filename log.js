const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const merge = Object.assign({}, obj1, obj2);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');