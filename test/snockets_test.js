'use strict';

// Based on grunt-contrib-concat test

var grunt = require('grunt');

function getNormalizedFile(filepath) {
  return grunt.util.normalizelf(grunt.file.read(filepath));
}

exports.snockets = {
  file2: function(test) {
    test.expect(1);

    var actual = getNormalizedFile('tmp/file2.js');
    var expected = getNormalizedFile('test/expected/file2.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};

