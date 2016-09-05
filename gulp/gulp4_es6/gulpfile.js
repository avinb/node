var gulp = require('gulp'), 
es6 = require('gulp-es6-transpiler'),
babel = require('gulp-babel');

gulp.task('js:es6', function () 
	{ 
		return gulp.src('./Assets/ES6/inheritance.js') 
	//.pipe(es6({ 'disallowUnknownReferences': true })) 
	.pipe(babel({
            minified:false
        }))
	.pipe(gulp.dest('./wwwroot/js')); }); 

gulp.task('js:es6min', function () 
	{ 
		return gulp.src('./Assets/ES6/inheritance.js') 
	//.pipe(es6({ 'disallowUnknownReferences': true })) 
	.pipe(babel({
            minified:true, retainLines:true
        }))
	.pipe(gulp.dest('./wwwroot/jsmin')); }); 



gulp.task('default', ['js:es6','js:es6min']);