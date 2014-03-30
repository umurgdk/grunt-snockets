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
  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('snockets', 'Building js files with snockets.js.', function() {
    this.snocketsOptions = {
      async: (this.data.async || false),
      bare: (this.data.bare || false)
    };

    var snockets = new Snockets(this.snocketsOptions);
    var processSnocket = function(snocket_data) {
      // It doesn't run with empty src and dest parameters.
      if (typeof snocket_data.src === 'undefined' ||
          typeof snocket_data.dest === 'undefined') {
        grunt.log.error('Missing Options: src and dest options necessary');
        return false;
      }

      if (fs.existsSync(path.resolve(snocket_data.src))) {
        try {
          js = snockets.getConcatenation(snocket_data.src, this.snocketsOptions);

          if (snocket_data.banner)
            js = snocket_data.banner + '\n' + js;

          fs.writeFileSync(path.resolve(snocket_data.dest), js);

          grunt.log.writeln('Compiled ' + snocket_data.src + ' to ' + snocket_data.dest);

          return true;
        } catch (e) {
          grunt.log.error(e);
          return false;
        }
      } else {
        grunt.log.error('Missing File: ' + snocket_data.src);
        return false;
      }
    };

    if (Array.isArray(this.data)) {
      this.data.forEach(processSnocket);
    } else {
      processSnocket(this.data);
    }
  });

};
