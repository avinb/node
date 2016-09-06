var gulp = require('gulp'),
 sass = require('gulp-sass'),
 sourcemaps = require('gulp-sourcemaps'); 
 gulp.task('css', function () { 
 	return gulp.src('./Assets/Sass/**/*.scss')
 	.pipe(sourcemaps.init()) 
 	.pipe(sass({ outputStyle: 'compressed' })) 
 	.pipe(sourcemaps.write('../maps')) 
 	.pipe(gulp.dest('./wwwroot/css')); }); 

 gulp.task('default', ['css']);