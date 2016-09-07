var gulp = require('gulp'),
    gzip = require('gulp-gzip'),
    logger = require('gulp-logger'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	tar = require('gulp-tar');

gulp.task('gzipScripts', function() {
    gulp.src('./Assets/js/**/*.js')
    .pipe(logger({
            before: 'Starting Gzip...',
            after: 'Gzipping complete!',
            showChange: true
        }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('./wwwroot/scripts'));
});

gulp.task('tarballScripts', function() {
    gulp.src('./Assets/js/**/*.js')
    .pipe(logger({
            before: 'Starting Gzip...',
            after: 'Gzipping complete!',
            showChange: true
        }))
    .pipe(concat('all.js'))
    .pipe(uglify())
	.pipe(tar('all.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('./wwwroot/scripts'));
});

gulp.task ('default', ['gzipScripts', 'tarballScripts']);
