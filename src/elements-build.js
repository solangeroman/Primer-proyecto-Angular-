const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/cejs-elements/runtime.js',
        './dist/cejs-elements/polyfills.js',
        './dist/cejs-elements/scripts.js',
        './dist/cejs-elements/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/cejs-elements.js');
    await fs.copyFile(
        './dist/cejs-elements/styles.css',
        'elements/styles.css'
    );
})();