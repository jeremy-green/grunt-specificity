'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        specificity: {
          options: {
            report: 'reports/css/cssspecificity.txt'
          },
          src: ['../taoti/learning-grunt/css/main.css']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['specificity']);

};
