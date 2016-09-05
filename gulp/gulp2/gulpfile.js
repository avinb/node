"use strict";

var gulp = require("gulp");
var less = require("gulp-less");

var minifyCSS = require("gulp-clean-css");

var sourcemaps = require('gulp-sourcemaps');

gulp.task ('mninifcation', function ()  {

	gulp.src('Assets/Styles.less')
	.pipe(less())
	.pipe(sourcemaps.init())
	.pipe(minifyCSS({keepBreaks: false}) ,  function (details) {

		console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);


	})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('wwwroot/css'));

});


gulp.task ('default', ['mninifcation'], function (){
	console.log('Do something in default');
} );