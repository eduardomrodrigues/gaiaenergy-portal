const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');


function cleanAll() {
  return src('./build')
    .pipe(clean({
      force: true
    }));
}


function html() {
  return src('app/*.html')
    .pipe(dest('build'));
}

function css() {
  return src('app/css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build'));
}

function js() {
  return src('app/js/*.js', {
      sourcemaps: true
    })
    .pipe(concat('js/app.min.js'))
    .pipe(uglify())
    .pipe(dest('build', {
      sourcemaps: true
    }));

}


function server() {

  browserSync.init({
    watch: true,
    server: "./build",
  });

  watch(['app/*'], function (cb) {
    html();
    css();
    js();

    browserSync.reload();
    cb();
  })


}



exports.dist = parallel(html, css, js);
exports.dev = series(cleanAll, html, css, js, server);