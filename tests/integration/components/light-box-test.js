import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import jQuery from 'jquery'
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | light box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{light-box}}`);
    assert.dom(this.element).hasText('')

    // Template block usage:
    await render(hbs`
    {{#light-box}}
      template block text
    {{/light-box}}
  `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it opens lightbox on image click', async function (assert) {
    assert.expect(2);
    await render(hbs`
    {{light-box
      href="assets/images/1.jpg"
      data-lightbox="cat-1"
      data-title="Cat 1"
      data-alt="Cat 1"}}
  `);

    assert.equal(jQuery('#lightboxOverlay').length, 1, 'lightbox overlay is missing');
    assert.equal(jQuery('#lightbox').length, 1, 'lightbox container is missing');
  });

  test('it renders a link without an image when `inlineImage` is false', async function (assert) {
    await render(hbs`
    {{light-box
      href="assets/images/1.jpg"
      data-lightbox="cat-1"
      data-title="Cat 1"
      data-alt="Cat 1"
      inlineImage=false}}
  `);

    assert.dom('img').doesNotExist('Component does not contain inline image element');
  });
});
