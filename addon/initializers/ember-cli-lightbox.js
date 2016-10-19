export function initialize(addonConfig /*, application */) {
  if (window.lightbox && addonConfig && addonConfig.lightboxOptions) {
  	window.lightbox.option(addonConfig.lightboxOptions);
  }
}

export default {
  name: 'ember-cli-lightbox',
  initialize
};
