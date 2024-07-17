const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const fullName = name || 'buddy';
const electronDownloadPath = path.join(repositoryRootPath, 'electron');