import {
	moduleForComponent, test
}
from 'ember-qunit';

moduleForComponent('light-box', 'Unit | Component | light box', {
	// Specify the other units that are required for this test
	// needs: ['component:foo', 'helper:bar'],
	unit: true
});

test('it renders', function(assert) {
	assert.expect(2);

	// Creates the component instance
	var component = this.subject();
	assert.equal(component._state, 'preRender');

	// Renders the component to the page
	this.render();
	assert.equal(component._state, 'inDOM');
});

test('it opens lightbox on image click', function(assert) {
	assert.expect(2);
	var component = this.subject({
		href: "assets/images/1.jpg",
		"data-lightbox": "cat-1",
		"data-title": "Cat 1"
	});

	this.render();
	assert.equal($('#lightboxOverlay').length, 1);
	assert.equal($('#lightbox').length, 1);
});

test('it renders a link without an image when `inlineImage` is false', function(assert) {
	var component = this.subject({
		href: "assets/images/1.jpg",
		"data-lightbox": "cat-1",
		"data-title": "Cat 1",
		inlineImage: false
	});

	this.render();
	assert.equal(this.$('img').length, 0);
});