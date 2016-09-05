"use strict";
var gulp = require('gulp'), 
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('coffee', function () 
	{ gulp.src('./Assets/Coffee/**/*.coffee') 
	.pipe(sourcemaps.init())
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./wwwroot/scripts'));


	 });


gulp.task('default', ['coffee']);

