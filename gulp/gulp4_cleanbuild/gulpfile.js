"use strict"; 

var gulp = require('gulp'),
 del = require('del');

gulp.task('clean', function () {
 return del(['./wwwroot/css', './wwwroot/js', './wwwroot/*.html', '!./wwwroot/config.json']);
  }); 


gulp.task('build', function () 
	{ console.log('Building stuff - using less and coffeescript'); 


	gulp.src ('./Assets/**/*.*')
	.pipe(gulp.dest('./wwwroot'));

}); 

gulp.task('default', ['clean', 'build']);