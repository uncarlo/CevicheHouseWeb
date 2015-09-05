module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'main.css': 'App/**/*.less' // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['App/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('less-watch', ['less', 'watch']);
};