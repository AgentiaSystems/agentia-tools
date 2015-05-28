
![logo][logo-url]
---
[![Build Status][travis-badge]][travis-url]
[![Code Climate][gpa-badge]][codeclimate-url]
[![Test Coverage][coverage-badge]][codeclimate-url]

Multipurpose utilities for by Agentia modules

### Installation

[![NPM version][npm-badge]][npm-url]

Install with the Node.js package manager [npm][npm-url]:

    $ npm install --save agentia-utilities

### Running Tests

We use The Mocha framework along with the Chai assertion library for your unit tests.

You can run our unit tests by cloning our repository, install the module dependencies using `npm install`, then running `npm test`.

    git clone https://github.com/AgentiaSystems/agentia-utilities.git
    npm install
    npm test

You can also use our `gulp` tasks: `test` and `coverage`.

    gulp test
    gulp coverage (which generates a coverage report)

## License
**agentia-utilities** is free and open source under the MIT License.

Copyright (c) 2015 [Johnny Estilles][jme-url], [http://www.agentia.asia][agentia-url]


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[agentia-url]: http://www.agentia.asia
[jme-url]: https://github.com/JohnnyEstilles
[logo-url]: media/logo.png

[npm-url]: https://www.npmjs.com/package/agentia-utilities
[npm-badge]: https://badge.fury.io/js/agentia-utilities.png

[travis-url]: https://travis-ci.org/AgentiaSystems/agentia-utilities
[travis-badge]: https://travis-ci.org/AgentiaSystems/agentia-utilities.svg?branch=master

[codeclimate-url]: https://codeclimate.com/github/AgentiaSystems/agentia-utilities
[gpa-badge]: https://codeclimate.com/github/AgentiaSystems/agentia-utilities/badges/gpa.svg
[coverage-badge]: https://codeclimate.com/github/AgentiaSystems/agentia-utilities/badges/coverage.svg
