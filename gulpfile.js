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
const reload = browserSync.reload;

function clearAllHtmls() {
  return src('build/*.html')
    .pipe(clean({
      force: true
    }));
}

function clearAllJs() {
  return src('build/js/*')
    .pipe(clean({
      force: true
    }));
}

function clearAllCss() {
  return src('build/css/*.css')
    .pipe(clean({
      force: true
    }));
}

function html() {
  clearAllHtmls();

  console.log('html');

  return src('app/*.html')
    .pipe(dest('build'))
    .pipe(browserSync.stream());
}

function css() {
  clearAllCss();

  return src('app/css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build'))
    .pipe(browserSync.stream());
}

function js() {
  clearAllJs();


  return src('app/js/*.js', {
      sourcemaps: true
    })
    .pipe(concat('js/app.min.js'))
    .pipe(dest('build', {
      sourcemaps: true
    }))
    .pipe(browserSync.stream());

}


function server() {

  browserSync.init({
    server: "./build"
  });

  watch(['app/*'], function (cb) {
    html();
    css();
    js();

    reload;
    cb();
  })


}



exports.dist = parallel(html, css, js);
exports.dev = series(html, css, js, server);