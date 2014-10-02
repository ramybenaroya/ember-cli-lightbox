import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'data-lightbox', 'data-title'],
  showImage: true,
  classNames: ['ember-lightbox']
});
