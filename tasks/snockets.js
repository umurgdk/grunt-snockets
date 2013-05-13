var Snockets = require('snockets'),
	fs = require('fs'),
  path = require('path');

/*
 * grunt-snockets
 * https://github.com/umurgedik/grunt-snockets
 *
 * Copyright (c) 2013 Umur Gedik
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  var snockets = new Snockets();

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('snockets', 'Building js files with snockets.js.', function() {
    // It doesn't run with empty src and dest parameters.    
    if (typeof this.data.src === 'undefined' ||
        typeof this.data.dest === 'undefined') {
      grunt.log.error('Missing Options: src and dest options necessary');
      return false;
    }

    if (fs.existsSync(path.resolve(this.data.src))) {
      try {
        js = snockets.getConcatenation(this.data.src, {async: false});

        fs.writeFileSync(path.resolve(this.data.dest), js);

        grunt.log.write(this.data.src + ' snocket to ' + this.data.dest);
        return true;
      } catch (e) {
        grunt.log.error(e);
        return false;
      }
    } else {
      grunt.log.error('Missing File: ' + this.data.src);
      return false;
    }
  });

};
