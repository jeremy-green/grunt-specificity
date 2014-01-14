'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        specificity: {
          options: {
            report: 'path/to/reports'
          },
          src: ['path/to/file.css']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['specificity']);

};
