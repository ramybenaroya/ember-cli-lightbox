import Ember from 'ember';

export default function() {
	this.registry.register('service:-routing', Ember.Object.extend({
		availableRoutes: function() {
			return ['index'];
		},
		hasRoute: function(name) {
			return name === 'index';
		},
		isActiveForRoute: function() {
			return true;
		},
		generateURL: function() {
			return "/";
		}
	}));
}