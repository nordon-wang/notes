let gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('testLess', function() {
	gulp.src('react/index.less')
		.pipe(less())
		.pipe(gulp.dest('react'));
})