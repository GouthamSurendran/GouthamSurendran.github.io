const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

function copyHtml() {
    return src('./*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
    return src('./images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function jsTask() {
    return src('./Js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))  // concat all files
    .pipe(terser())          // minify js files
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/Js'))
}

function cssTask() {
    return src('./css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css')) 
    .pipe(postcss([autoprefixer(),cssnano()]))         
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.default = parallel(imgTask);