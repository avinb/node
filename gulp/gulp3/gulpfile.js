
"use strict";

var gulp = require('gulp'); 
var less = require('gulp-less'); 
var minifyCSS = require('gulp-clean-css');

gulp.task('lessToCss', function () { 

	gulp.src('Assets/Styles.less') 
	.pipe(less()) 
	.pipe(gulp.dest('wwwroot/css')); });

gulp.task('watchLessFiles', function () { 
	 	gulp.watch('./Assets/Styles.less', ['lessToCss']); 
	 }); 

gulp.task('default', ['watchLessFiles']);
