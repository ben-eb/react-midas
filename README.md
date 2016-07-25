# react-midas [![Build Status](https://travis-ci.org/ben-eb/react-midas.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/react-midas.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/react-midas.svg)][deps]

> Highlight CSS in React with [Midas][midas].

## Install

With [npm](https://npmjs.org/package/react-midas) do:

    npm install react-midas --save

## API

### reactMidasFactory

This factory function returns a React component which highlights the CSS
code block passed to it using Midas, a PostCSS based syntax highlighter.
The themes required to style these code blocks are likely available in
`node_modules/midas/dist/themes` if you're using npm 3, otherwise you should
check under `node_modules/react-midas/node_modules/midas/dist/themes`.

**Parameters**

-   `opts` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Options to pass to midas. You can pass anything here
    except the `stringify` option, which is automatically set to `false`.
    -   `opts.wrap` **\[[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Wrap the output with `<pre class="midas"></pre>`.
        By default, the CSS will also be wrapped with `<code></code>`. (optional, default `true`)

**Examples**

```javascript
import React from 'react';
import midasFactory from 'react-midas';

const Midas = midasFactory();

export default () => (
  <div>
    <p>Here is how to make a link blue, using CSS:</p>
    <Midas>{'a { color: blue; }'}</Midas>
  </div>
);
```

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** React component.

### Midas

React component responsible for the CSS syntax highlighting.

Returns **ReactElement** `<pre class="midas"><code>(css code)</code></pre>`

## Links

Please help to support this project by [purchasing a midas sticker][sticker].

[sticker]: https://www.stickermule.com/uk/marketplace/11087-midas

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub>Ben Briggs</sub>](http://beneb.info)<br />[💻](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) [📖](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) 👀 [⚠️](https://github.com/ben-eb/postcss-at-warn/commits?author=ben-eb) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors] specification. Contributions of
any kind welcome!

## License

MIT © [Ben Briggs](http://beneb.info)

[all-contributors]: https://github.com/kentcdodds/all-contributors

[ci]: https://travis-ci.org/ben-eb/react-midas

[deps]: https://gemnasium.com/ben-eb/react-midas

[npm]: http://badge.fury.io/js/react-midas

[midas]: https://github.com/ben-eb/midas
