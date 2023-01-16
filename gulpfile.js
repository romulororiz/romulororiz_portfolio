const { src, dest, watch, series, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
	return src('./styles/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./styles/css'));
}

function watchTask() {
	watch(['./styles/scss/**/*.scss', './**/*.js'], buildStyles);
}

task('default', series(buildStyles, watchTask));
