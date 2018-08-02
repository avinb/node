var gulp = require('gulp'), 
sass = require('gulp-sass'), 
logger = require('gulp-logger'); 
gulp.task('css:sass', function () { 
	gulp.src('./Assets/Sass/**/*.scss') 
	.pipe(logger({ before: 'Going to process Sass files...', 
		after: 'Sass files were processed...', 
		beforeEach: 'Processing... ', 
		afterEach: ' ...Done' })) 
	.pipe(sass()) 
	.pipe(gulp.dest('./wwwroot/css')); 
}); 

gulp.task('default', ['css:sass']);