import {
	moduleForComponent,
	test
}
from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('light-box', 'LightBoxComponent', {
	// specify the other units that are required for this test
	// needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
	expect(2);

	var component = this.subject();
	equal(component._state, 'preRender');

	this.append();
	equal(component._state, 'inDOM');
});

test('it opens lightbox on image click', function() {
	expect(2);

	var component = this.subject({
		href: "assets/images/1.jpg",
		"data-lightbox": "cat-1",
		"data-title": "Cat 1"
	});

	this.append();

	component.$().click();
	equal($('#lightboxOverlay').length, 1);
	equal($('#lightbox').length, 1);
	
});

test('it renders a link without an image when `inlineImage` is false', function() {
	expect(1);

	var component = this.subject({
		href: "assets/images/1.jpg",
		"data-lightbox": "cat-1",
		"data-title": "Cat 1",
		inlineImage: false
	});

	this.append();

	equal(this.$('img').length, 0);	
});