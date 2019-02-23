const {src, dest, parallel} = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('app/*.html')
    .pipe(dest('build'));
}

function css(){
  return src('app/css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build'));
}

function js(){
  return src('app/js/*.js', {sourcemaps: true})
    .pipe(concat('js/app.min.js'))
    .pipe(dest('build', {sourcemaps: true}));

}

exports.dist = parallel(html, css, js);
