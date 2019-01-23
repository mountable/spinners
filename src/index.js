/**
 * Importing all spinners in a one-shot manner.
 */
const files = require.context('.', false, /\.vue$/)
const SPINNERS = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    SPINNERS[key.replace(/(\.\/|\.vue)/g, '').replace(/([A-Z])/g, '-$1').toLowerCase()] = files(key).default
});

export default SPINNERS
