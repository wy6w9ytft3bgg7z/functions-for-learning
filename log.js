const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);