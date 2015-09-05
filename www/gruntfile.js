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
                    'Styles/main.css': 'Styles/**/*.less' // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['Styles/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('less-watch', ['less', 'watch']);
};