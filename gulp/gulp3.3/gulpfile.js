"use strict"; 
var gulp = require ('gulp');
var less =  require('gulp-less');
var gulpwatch = require ('gulp-watch');
var lessPath = './Assets/**/*.less';

gulp.task ('lesstoCss', function (){
	gulp.src(lessPath)

	.pipe(less())
	
	.pipe(gulp.dest('wwwroot/css'));
});



gulp.task ('default', ['lesstoCss']);