const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

// Preventing Babel from transpiling NodeModules packages
environment.loaders.delete('nodeModules');
environment.loaders.prepend('typescript', typescript)
module.exports = environment
