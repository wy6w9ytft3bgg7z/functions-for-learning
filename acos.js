const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const apmRootPath = path.join(repositoryRootPath, 'apm');
var arr3 = "jones".split('');