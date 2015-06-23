# Ember-cli-lightbox [![Build Status](https://travis-ci.org/ramybenaroya/ember-cli-lightbox.svg?branch=master)](https://travis-ci.org/ramybenaroya/ember-cli-lightbox)

A lightbox component for ember using [Lightbox2](http://lokeshdhakar.com/projects/lightbox2/).

## Usage

* `npm install --save ember-cli-lightbox`
* `ember g ember-cli-lightbox`

Preview image on image click
```hbs
{{light-box href=imageUrl
			data-lightbox=name 
			data-title=title
			data-class=imgClassName}}
```

Preview image on some DOM click
```hbs
{{#light-box 	href=imageUrl
				data-lightbox=name
				data-title=title
				inlineImage=false}}
    <!-- DOM Element here -->
{{/light-box}}
```

## Ember Compatibility Table

| Ember Version    | Lightbox Version     |
| -----------------| ---------------------|
| 1.8 through 1.10 | 0.2.0                |
| 1.11 and beyond  | >=0.3.0              |

## Demo
Check out the demo on [github pages](http://ramybenaroya.github.io/ember-cli-lightbox/ "Ember-cli-lightbox Demo").
Alternatively you can clone this repo and run the app

```sh
$ npm install -g ember-cli
$ git clone git@github.com:ramybenaroya/ember-cli-lightbox
$ cd ember-cli-lightbox
# install dependencies
$ npm install; bower install
$ ember g ember-cli-lightbox
# fire up local server
$ ember serve
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
