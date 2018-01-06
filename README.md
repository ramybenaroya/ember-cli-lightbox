# Ember-cli-lightbox [![Build Status](https://travis-ci.org/ramybenaroya/ember-cli-lightbox.svg?branch=master)](https://travis-ci.org/ramybenaroya/ember-cli-lightbox)

A lightbox component for ember using [Lightbox2](http://lokeshdhakar.com/projects/lightbox2/).

## Usage

* `ember install ember-cli-lightbox`

Preview image on image click
```hbs
{{light-box 
  href=imageUrl 
  data-lightbox=name 
  data-title=title 
  data-alt=alt 
  data-class=imgClassName}}
```

Preview image on some DOM click
```hbs
{{#light-box 	
  href=imageUrl 
  data-lightbox=name 
  data-title=title 
  data-alt=alt 
  inlineImage=false}}
  <!-- DOM Element here -->
{{/light-box}}
```

## Configuration

Setting [global lightbox options](http://lokeshdhakar.com/projects/lightbox2/#options):
```javascript
// config/enironment.js
module.exports = function(environment) {
  var ENV = {
    //...
    'ember-cli-lightbox': {
      lightboxOptions: {
        alwaysShowNavOnTouchDevices: false,
        albumLabel: "Image %1 of %2",
        disableScrolling: false,
        fadeDuration: 500,
        fitImagesInViewport: true,
        maxWidth: 1000,
        maxHeight: 1000,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true
      }
    }
  };
  //...

  return ENV;
};
```

## Ember Compatibility Table

| Ember Version			| Ember-Cli-Lightbox Version |
| ---------------------	| ---------------------------|
| 1.8 through 1.10		| 0.2.0                      |
| 1.11 through 1.13		| 0.3.0 =< x < 1.0.0         |
| 2.0 and beyond 		| >=1.0.0                    |
| Addons				| >=2.0.0                    |

## Demo
Check out the demo on [github pages](http://ramybenaroya.github.io/ember-cli-lightbox/ "Ember-cli-lightbox Demo").
Alternatively you can clone this repo and run the app

```sh
$ npm install -g ember-cli
$ git clone git@github.com:ramybenaroya/ember-cli-lightbox
$ cd ember-cli-lightbox
# install dependencies
$ npm i
# fire up local server
$ ember serve
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
