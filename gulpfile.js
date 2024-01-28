const gulp = require('gulp');
const sass = require('gulp-sass');

function css() {
	return gulp
		.src('./src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
}
exports.css = css;

function html() {
	return gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
} 
exports.html = html;

function watch() {
	gulp.watch('./src/scss/**/*.scss', 'css');
	gulp.watch('./src/**/index.html', 'html');
};
exports.watch = watch;

const build = gulp.parallel(css, html);
exports.build = build;

exports.dev = gulp.series(build, watch);
