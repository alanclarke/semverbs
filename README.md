# semverbs
Tiny utility lib for parsing and comparing semantic versions

- 31 lines of code
- no dependencies
- 100% test coverage
- suitable for browser and nodejs
- fast

## installation
```js
npm install semverbs
```

## usage
`
 var sv = require('semverbs')
 sv.eq('3', '3.0.0') // true
 sv.gt('3.0.1', '3.0.0') // true
 sv.lt('3.0.1', '3.2.0') // true
 sv.parse('3.2.1') // { major: 3, minor: 2, patch: 1 }
 ['1.2.2', '1.2.1', '1.2.3'].sort(sv.compare) // ['1.2.1', '1.2.2', '1.2.3']
`

## run tests
` npm test `

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
