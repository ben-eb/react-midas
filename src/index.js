// @flow

import Midas from 'midas';
import React from 'react';
import toH from 'hast-to-hyperscript';

type MidasOptions = {
    wrap?: boolean,
};

/**
 * This factory function returns a React component which highlights the CSS
 * code block passed to it using Midas, a PostCSS based syntax highlighter.
 * The themes required to style these code blocks are likely available in
 * `node_modules/midas/dist/themes` if you're using npm 3, otherwise you should
 * check under `node_modules/react-midas/node_modules/midas/dist/themes`.
 *
 * @param {Object} [opts] Options to pass to midas. You can pass anything here
 * except the `stringify` option, which is automatically set to `false`.
 * @param {boolean} [opts.wrap=true] Wrap the output with `<pre class="midas"></pre>`.
 * By default, the CSS will also be wrapped with `<code></code>`.
 * @returns {Function} React component.
 * @example
 *
 * import React from 'react';
 * import midasFactory from 'react-midas';
 *
 * const Midas = midasFactory();
 *
 * export default () => (
 *   <div>
 *     <p>Here is how to make a link blue, using CSS:</p>
 *     <Midas>{'a { color: blue; }'}</Midas>
 *   </div>
 * );
 */

function reactMidasFactory (opts?: MidasOptions) {
    const midas = new Midas({
        ...opts,
        stringify: false,
    });

    /**
     * React component responsible for the CSS syntax highlighting.
     *
     * @name Midas
     * @returns {ReactElement} `<pre class="midas"><code>(css code)</code></pre>`
     */

    return React.createClass({
        propTypes: {
            children: React.PropTypes.string.isRequired,
        },

        render () {
            const {children, ...custom} = this.props;
            const code = toH(React.createElement, midas.process(children));
            return {
                ...code,
                props: {
                    ...code.props,
                    ...custom,
                },
            };
        },
    });
}

export default reactMidasFactory;
