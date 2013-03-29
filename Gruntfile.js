module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [ 'gruntfile.js', 'jquery.filter-validate.js' ],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        qunit: {
            files: [ 'test.html' ]
        },
        uglify: {
            options: {
                report: 'gzip',
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %>\n<%= pkg.author %> - License: <%= pkg.license %> */\n\n'
            },
            build: {
                src: 'jquery.filter-validate.js',
                dest: 'jquery.filter-validate.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};