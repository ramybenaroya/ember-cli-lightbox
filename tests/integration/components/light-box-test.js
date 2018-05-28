import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

moduleForComponent('light-box', 'Integration | Component | light box', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{light-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#light-box}}
      template block text
    {{/light-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it opens lightbox on image click', function(assert) {
  assert.expect(2);
  this.render(hbs`
    {{light-box
      href="assets/images/1.jpg"
      data-lightbox="cat-1"
      data-title="Cat 1"
      data-alt="Cat 1"}}
  `);
  assert.equal($('#lightboxOverlay').length, 1, 'lightbox overlay is missing');
  assert.equal($('#lightbox').length, 1, 'lightbox container is missing');
});

test('it renders a link without an image when `inlineImage` is false', function(assert) {
  this.render(hbs`
    {{light-box
      href="assets/images/1.jpg"
      data-lightbox="cat-1"
      data-title="Cat 1"
      data-alt="Cat 1"
      inlineImage=false}}
  `);
  assert.equal(this.$('img').length, 0, 'Component contains an image element');
});
