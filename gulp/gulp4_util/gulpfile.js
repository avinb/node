"use strict";
var gulp = require ("gulp"),
	gutil = require("gulp-util");

var path = require('vinyl');
gulp.task ('utillogging' , function () {
	gutil.beep();
	gutil.log(gutil.colors.red.bgGreen.underline('Error'), 'Some went terribly wrong...');

	gutil.log(gutil.colors.bgGreen ('OK'), 'Everything is fine ' );

	gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

});


gulp.task ('createnewfiles', function(){


var path = '';
var file = new gutil.File({
  base: path.join(__dirname, './fixtures/'),
  cwd: __dirname,
  path: path.join(__dirname, './fixtures/test.coffee')
});


});

gulp.task('default', ['utillogging', 'createnewfiles']);