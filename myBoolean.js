const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const executableName = getExecutableName(channel, appName);