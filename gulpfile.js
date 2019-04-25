const {
  src,
  dest,
  series,
  watch
} = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



function cleanAll() {
  return src('./build', {
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }));
}


function html() {
  return src('app/*.html')
    .pipe(dest('./build'));
}

function copySitemap() {
  return src('app/sitemap.xml')
    .pipe(dest('./build'));
}

function copyRobots() {
  return src('app/robots.txt')
    .pipe(dest('./build'));
}

function css() {
  return src('app/css/**/*.css', {
      allowEmpty: true
    })
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./build/css'));
}

function js() {

  return src('app/js/**/*.js')
    .pipe(concat('js/app.min.js'))
    .pipe(uglify())
    .pipe(dest('build', {
      sourcemaps: true
    }));

}



function imageMin() {
  return src('app/img/*')
    .pipe(imagemin())
    .pipe(dest('build/img'));

}

function server() {

  browserSync.init({
    watch: true,
    server: "./build",
  });

  watch(['app/**/*'], function (cb) {
    html();
    css();
    js();
    imageMin();
    browserSync.reload();
    cb();
  })


}



exports.dist = series(cleanAll, html, css, js, imageMin, copySitemap, copyRobots);
exports.dev = series(cleanAll, html, css, js, imageMin, server);
