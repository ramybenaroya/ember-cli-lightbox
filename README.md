# Ember-cli-lightbox [![Build Status](https://travis-ci.org/ramybenaroya/ember-cli-lightbox.svg?branch=master)](https://travis-ci.org/ramybenaroya/ember-cli-lightbox)

A lightbox component for ember using [http://lokeshdhakar.com/projects/lightbox2/](Lightbox2).

## Usage

* `npm install --save ember-cli-lightbox`
* `ember g ember-cli-lightbox`

Preview image on image click
```hbs
{{light-box href=imageUrl data-lightbox=name data-title=title}}
```

Preview image on some DOM click
```hbs
{{#light-box href=imageUrl data-lightbox=name data-title=title inlineImage=false}}
    <!-- DOM Element here -->
{{/light-box}}
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember g ember-cli-lightbox`

## Previewing

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
