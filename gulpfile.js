const {src, dest, parallel} = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('app')
    .pipe(dest('build/html'));
}

function css(){
  return src('app/css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css'));
}

function js(){
  return src('app/javascript/*.js', {sourcemaps: true})
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', {sourcemaps: true}));

}

exports.dist = parallel(html, css, js);
