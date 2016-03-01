var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require ('gulp-concat');

gulp.task('default',function() {
	gulp.src('css/main.css')
	.pipe(concat('all.min.css'))
	.pipe(uglify())
	.pipe(gulp.dest('dupa'));
});
