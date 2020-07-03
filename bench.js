var fs = require('fs')
var bench = require('nanobench')
var acorn = require('acorn')
var assignParent = require('.')

bench('d3', function (b) {
  var source = fs.readFileSync(require.resolve('d3/dist/d3'), 'utf8')
  var ast = acorn.parse(source)

  b.start()
  assignParent(ast)
  b.end()
})
