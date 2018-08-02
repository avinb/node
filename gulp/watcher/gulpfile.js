"use strict";
var gulp = require('gulp');
var less = require('gulp-less');
var gulpWatch = require('gulp-watch');
var lessPath = './Assets/**/*.less';


gulp.task('lessToCss2', function () {
 gulp.src('Assets/Styles.less')
 .pipe(less())
 .pipe(gulp.dest('wwwroot/css'));
});
gulp.task('watchLessFiles', function () {
 gulp.watch('./Assets/styles.less', ['lessToCss2']);
});
gulp.task('default2', ['watchLessFiles']);


gulp.task('lessToCss', function () {
 gulp.src(lessPath)
 .pipe(gulpWatch(lessPath))
 .pipe(less())
 .pipe(gulp.dest('wwwroot/css'));
});
gulp.task('default', ['lessToCss']);
