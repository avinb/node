var gulp = require('gulp'), 
gulpLoadPlugins = require('gulp-load-plugins'),
 plugins = gulpLoadPlugins(); 

gulp.task('css:less', function () { 
	return gulp.src('./styles.less') 
	.pipe(plugins.less()) 
	.pipe(gulp.dest('./output/less'));
});

gulp.task('css:sass', function () {
 return gulp.src('./styles.scss') 
 .pipe(plugins.sass()) 
 .pipe(gulp.dest('./output/sass')); 
}); 

gulp.task('default', ['css:sass','css:less'], function () {
	console.log("this is the message"); 
	return plugins.util.log('Gulp is running!')
});