var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

sass.compiler = require('node-sass');

//Gulp Static
gulp.task('static-sass', function () {
  return gulp.src([
    './sass/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cssnano({ zindex: false }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('static-js', function() {
  return gulp.src(['./js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'));
});
