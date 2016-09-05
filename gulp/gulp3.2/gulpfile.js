"use strict"; 
var gulp = require ('gulp');
var less =  require('gulp-less');
var watch = require ('gulp-watch');
//var debug = require('gulp-debug');
var debugs = require('gulp-debug-streams');
var lessPath = './Assets/**/*.less';

gulp.task ('lesstoCss', function (){
	gulp.src(lessPath)
	.pipe(debugs())
	.pipe(less())
	.pipe(debugs())
	.pipe(gulp.dest('wwwroot/css'));
});


gulp.task ('watchLessFiles', function () {
	gulp.watch (lessPath , ['lesstoCss']);
});


gulp.task ('default', ['watchLessFiles']);