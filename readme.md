String substitution according to the given format
=================================================

[![Build Status](https://img.shields.io/travis/cjssdk/format.svg?style=flat-square)](https://travis-ci.org/cjssdk/format)
[![NPM version](https://img.shields.io/npm/v/cjs-format.svg?style=flat-square)](https://www.npmjs.com/package/cjs-format)
[![Dependencies Status](https://img.shields.io/david/cjssdk/format.svg?style=flat-square)](https://david-dm.org/cjssdk/format)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)
[![RunKit](https://img.shields.io/badge/RunKit-try-yellow.svg?style=flat-square)](https://runkit.com/npm/cjs-format)


Simplified speed-oriented JavaScript equivalent of the C/PHP `sprintf` function.


## Installation ##

```bash
npm install cjs-format
```


## Usage ##

Add to the scope:

```js
var format = require('cjs-format');
```

Simple replacement:

```js
// This is a cat
console.log(format('This is a {0}', 'cat'));
```

Multiple replacement:

```js
// This is a cat and a dog
console.log(format('This is a {0} and a {1}', 'cat', 'dog'));
```

Replacement with changed order:

```js
// This is a cat and a dog and another cat
console.log(format('This is a {0} and a {1} and another {0}', 'cat', 'dog'));
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/cjssdk/format/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`cjs-format` is released under the [MIT License](license.md).
