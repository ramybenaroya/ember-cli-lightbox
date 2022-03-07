import layout from '../templates/components/light-box';
import Component from '@ember/component';

export default Component.extend({
	layout: layout,
	tagName: 'a',
	attributeBindings: ['href', 'data-lightbox', 'data-title', 'data-class', 'data-alt'],
	inlineImage: true,
	classNames: ['ember-lightbox'],
	classNameBindings: ['inlineImage']
});
