'use strict';
var path = require('path'),
    fs = require('fs');
module.exports = {
    name: 'ember-cli-lightbox',
    blueprintsPath: function() {
        return path.join(__dirname, 'blueprints');
    },
    included: function lightbox_included(app) {
        this._super.included.apply(this, arguments);
        var lightboxPath = path.join(app.bowerDirectory, 'lightbox', 'dist'),
            lightboxCssContent = fs.readFileSync(path.join(lightboxPath, 'css', 'lightbox.css'),'utf8');
        lightboxCssContent = lightboxCssContent.replace(/\.\.\/images\//g, 'images/lightbox/');
        fs.writeFileSync(path.join(lightboxPath, 'css', 'lightbox.processed.css'), lightboxCssContent);
        this.app.import(path.join(lightboxPath, 'js',  'lightbox.js'));
        this.app.import(path.join(lightboxPath, 'css', 'lightbox.processed.css'));

        this.app.import(path.join(lightboxPath, 'images', 'close.png'), {
            destDir: 'assets/images/lightbox'
        });
        this.app.import(path.join(lightboxPath, 'images', 'loading.gif'), {
            destDir: 'assets/images/lightbox'
        });
        this.app.import(path.join(lightboxPath, 'images', 'next.png'), {
            destDir: 'assets/images/lightbox'
        });
        this.app.import(path.join(lightboxPath, 'images', 'prev.png'), {
            destDir: 'assets/images/lightbox'
        });
    }
};
