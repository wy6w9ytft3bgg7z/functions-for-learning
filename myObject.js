const result = await makeHttpRequest(url);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const scriptRootPath = path.join(repositoryRootPath, 'script');