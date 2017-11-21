var test = require('tape')
var parse = require('acorn').parse
var assignParent = require('./')

test('adds parent properties', function (t) {
  var ast = parse(`
    module.exports = function xyz () {
      return xyz.toString()
    }
  `)

  var assignment = ast.body[0].expression

  t.equal(assignParent(ast), ast, 'returns original ast')
  t.equal(assignment.left.parent, assignment, 'node properties refer back to correct node')
  t.equal(ast.body[0].parent, ast, 'array element properties refer back to correct node')
  t.end()
})
