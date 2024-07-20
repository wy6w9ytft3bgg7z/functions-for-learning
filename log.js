const isEmptyArray = arr => !arr.length;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const appName = getAppName(channel);