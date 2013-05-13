module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    snockets: {
      file2: {
        src: 'test/fixtures/file2.js',
        dest: 'tmp/file2.js'
      },
      file2_banner: {
        src: 'test/fixtures/file2.js',
        dest: 'tmp/file2_banner.js',
        banner: '// my awesome banner'
      }
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },
    clean: {
      tests: ['tmp/*']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'snockets', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', 'lint test');

};
