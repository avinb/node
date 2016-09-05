"use strict";

var gulp=require ('gulp'),
    less=require('gulp-less'),
    jade=require('gulp-jade'),
    connect=require('gulp-connect');
var clean = require('gulp-clean');

 var jadeDir = './Assets/Jade/**/*.jade';
 var lessDir = './Assets/Less/**/*.less';
 var outputDirHtml = './';
 var outputDirCss = './css/';
 


gulp.task ('clean', function (){

	gulp.src(outputDirHtml + '*.html', {read: false})
	.pipe(clean());


gulp.src(outputDirCss + '*.css', {read: false})
	.pipe(clean());


});

gulp.task ('jade', ['clean'], function () {

	gulp.src (jadeDir)
	.pipe (jade())
	.pipe(gulp.dest(outputDirHtml))
	.pipe(connect.reload());

});

gulp.task ('less',['clean'],  function () {

	gulp.src (lessDir)
	.pipe (less())
	.pipe(gulp.dest(outputDirCss))
	.pipe(connect.reload());


});

gulp.task('watch', function() {
gulp.watch([jadeDir], ['jade']);
gulp.watch([lessDir], ['less']);


});


gulp.task('connect', function () {

	connect.server ( { 
	root : './',
	livereload:true ,
	port:2392,
	https:true
	});

});

gulp.task ('default', ['clean','less','jade','watch','connect']);
