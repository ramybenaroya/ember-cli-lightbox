/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('lightbox', '2.9.0');
  }
};
