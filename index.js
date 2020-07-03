var assert = require('assert')
var dash = require('dash-ast')

module.exports = function assignParent (ast, parentKey) {
  parentKey = parentKey || 'parent'

  assert(isNode(ast), 'estree-assign-parent: ast must be a Node with a `type`')
  assert(typeof parentKey === 'string', 'estree-assign-parent: key must be a string')

  dash(ast, function (node, parent) {
    node[parentKey] = parent
  })

  return ast
}

function isNode (n) {
  return n && typeof n === 'object' && typeof n.type === 'string'
}
