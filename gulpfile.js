var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var browserify = require('gulp-browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['css', 'js']);

gulp.task('watch', function() {
  gulp.watch('app/**/*.scss', ['css']);
  gulp.watch('app/**/*.js', ['js']);
});

gulp.task('css', function() {
  return gulp.src('app/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(cssnano())
  .pipe(concat('bundle.min.css'))
  .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src('app/app.js')
	.pipe(browserify({
    transform: babelify,
	  insertGlobals : true,
	  debug : false
	}))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest('public/js'))
  .pipe(uglify())
  .pipe(rename('bundle.min.js'))
  .pipe(gulp.dest('public/js'));
});
