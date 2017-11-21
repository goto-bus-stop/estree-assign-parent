var assert = require('assert')

module.exports = function assignParent (ast, key) {
  key = key || 'parent'

  assert.ok(isNode(ast), 'estree-assign-parent: ast must be a Node with a `type`')
  assert.equal(typeof key, 'string', 'estree-assign-parent: key must be a string')

  walk(ast, null)
  return ast

  function walk (node, parent) {
    var keys = Object.keys(node)
    node.parent = parent
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i]
      if (k === key) continue
      if (Array.isArray(node[k])) {
        var elements = node[k]
        for (var j = 0; j < elements.length; j++) {
          if (isNode(elements[j])) {
            walk(elements[j], node)
          }
        }
      }
      if (isNode(node[k])) {
        walk(node[k], node)
      }
    }
  }
}

function isNode (n) {
  return n && typeof n === 'object' && typeof n.type === 'string'
}
