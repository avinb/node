var gulp = require('gulp'), 
concat = require('gulp-concat');
order = require('gulp-order');

 gulp.task('css', function () { 
 	return gulp.src('./Assets/css/**/*.css') 
 	.pipe(order(['styles.css', '*.css']))
 	.pipe(concat('all.css')) 
 	.pipe(gulp.dest('./wwwroot/css')); 
 }); 

 gulp.task('default', ['css']);


