var gulp = require('gulp'), 
concat = require('gulp-concat');
concat = require('gulp-order');

 gulp.task('css', function () { 
 	return gulp.src('./Assets/css/**/*.css') 
 	.pipe(concat('all.css')) 
 	.pipe(gulp.dest('./wwwroot/css')); 
 }); 

 gulp.task('default', ['css']);


