import { run } from '@ember/runloop';
import Application from '@ember/application';
import EmberCliLightboxInitializer from 'dummy/initializers/ember-cli-lightbox';
import config from 'dummy/config/environment';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember cli lightbox', {
	beforeEach() {
		run(function () {
			application = Application.create();
			application.deferReadiness();
		});
	}
});

// Replace this with your real tests.
test('it applies lightbox option method', function (assert) {
	const originalLightbox = window.lightbox;
	let options;
	window.lightbox = {
		option(opts) {
			options = opts;
		}
	};
	EmberCliLightboxInitializer.initialize(application);
	window.lightbox = originalLightbox;
	assert.equal(JSON.stringify(options), JSON.stringify(config['ember-cli-lightbox'].lightboxOptions));
});
