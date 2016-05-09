var polyjuice = require('polyjuice')

var to_eslint = {
  jshint: polyjuice.from.jshint('./.jshintrc'),
  jscs  : polyjuice.from.jscs('./.jscsrc'),
  both  : polyjuice.to.eslint('./.jshintrc', './.jscsrc')
}
