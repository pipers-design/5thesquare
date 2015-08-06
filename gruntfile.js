var fs = require('fs');

module.exports = function(grunt) {

  grunt.initConfig({

    sass: {

      dev: {
        options: {
          style: 'nested'
        },
        expand: true,
        cwd: '_src/scss/',
        src: ['*.scss', '!_*'],
        dest: 'css/',
        ext: '.css'
      }
    },

    watch: {
      sass: {
        files: ['_src/scss/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['_src/js/*.js'],
        tasks: ['concat', 'uglify']
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          '_src/js/five.js',
        ],
        dest: 'js/five.js'
      }
    },

    uglify: {
        js: {
            files: { 'js/five.min.js': 'js/five.js' },
            options: {
                preserveComments: false
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

};

