/* eslint-env node */
'use strict';
var BroccoliPostCSS = require('broccoli-postcss');

module.exports = {
    name: 'ember-cli-lightbox',
    options: {
        nodeAssets: {
            lightbox2: {
                public: {
                    srcDir: 'dist/images',
                    destDir: 'assets/images/lightbox',
                    include: ['*']
                },
                import: {
                    include: ['dist/js/lightbox.js', 'dist/css/lightbox.css'],
                    processTree(input) {
                        return new BroccoliPostCSS(input, {
                            plugins: [{
                                module: require('postcss-url'),
                                options: {
                                    url(originalURL) {
                                        return originalURL.url.replace('../images/', './images/lightbox/');
                                    }
                                }
                            }]
                        });
                    }
                }
            }
        }
    }
};
