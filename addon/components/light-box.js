import Ember from 'ember';
import layout from '../templates/components/light-box';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'a',
	attributeBindings: ['href', 'data-lightbox', 'data-title', 'data-class', 'data-alt'],
	inlineImage: true,
	classNames: ['ember-lightbox'],
	classNameBindings: ['inlineImage']
});
