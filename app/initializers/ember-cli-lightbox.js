import config from '../config/environment';
import initializer from 'ember-cli-lightbox/initializers/ember-cli-lightbox';

export function initialize(...args){
	return initializer.initialize.apply(null, [config['ember-cli-lightbox'], ...args]);
}

export default {
  name: initializer.name,
  initialize
};
