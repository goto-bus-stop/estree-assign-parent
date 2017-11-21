# estree-assign-parent

assign `.parent` properties to all nodes in an ast.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/estree-assign-parent.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/estree-assign-parent
[travis-image]: https://img.shields.io/travis/goto-bus-stop/estree-assign-parent.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/estree-assign-parent
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install estree-assign-parent
```

## Usage

```js
var assignParent = require('estree-assign-parent')

var ast = assignParent(parse(`
  module.exports = function xyz () {
    return xyz.toString()
  }
`))

assert.equal(ast.body[0].parent, ast)
```

## API

### `assignParent(ast, key='parent')`

Add a `parent` key to all nodes belonging to `ast`, referring to the parent node.
The `key` option can be used to assign a different name, like `'parentNode'`.

## License

[Apache-2.0](LICENSE.md)
