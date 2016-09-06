"use strict";
var gulp = require('gulp');
//var less = require('gulp-less');
//var minifyCSS = require('gulp-clean-css');
gulp.task('clean', function () {
 console.log('Task clean is executing...');
});


gulp.task('task1', ['clean'], function () {
 console.log('Task 1 is executing...');
});
gulp.task('task2', ['clean'],function () {
 console.log('Task 2 is doing its thing...');
});
gulp.task('build', ['task1', 'task2']);
gulp.task('default', ['build'], function () {
 console.log('default task...');
});