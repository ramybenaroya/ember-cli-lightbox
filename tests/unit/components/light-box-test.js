import {
  moduleForComponent,
  test
} from 'ember-qunit';

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
