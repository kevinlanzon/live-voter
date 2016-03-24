module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js']
    },
    watch: {
      js: {
        files: ['js/js/*.js'],
        tasks: ['uglify:dev']
      }
    },
    es6transpiler: {
      dist: {
        files: {
          'dist/app.js': 'src/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['es6transpiler']);

};