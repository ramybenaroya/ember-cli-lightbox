import Ember from 'ember';

export default Ember.Mixin.create({
    tagName: 'a',
    attributeBindings: ['href', 'data-lightbox', 'data-title'],
    inlineImage: true,
    classNames: ['ember-lightbox'],
    classNameBindings: ['inlineImage']
});
