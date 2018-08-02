"use strict";

var gulp=require('gulp'),
	ts=require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
gulp.task('ts', function(){

	return gulp.src('./Assets/TypeScript/**/*.ts')
	.pipe(ts(tsProject))
	.pipe(gulp.dest('./wwwroot/js'));


});

gulp.task ('default', ['ts']);


