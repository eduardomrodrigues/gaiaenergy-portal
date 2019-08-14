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
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

function copyAllFonts() {
  return src('app/fonts/*')
    .pipe(dest('./build/fonts'));
}


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

  return src(['app/js/**/*.js', '!app/js/vendor/**/*.js'])
    .pipe(plumber())
    .pipe(concat('js/app.min.js'))
    .pipe(babel({
      presets: [
        '@babel/preset-react',
        '@babel/env'
        ]
    }))
    .pipe(dest('build', {
      sourcemaps: true
    }));

}



function copyJsVendor() {

  return src('app/js/vendor/**/*.js')
    .pipe(dest('build/js/vendor', {
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
    open: false,
    server: "./build",
  });

  watch(['app/**/*'], function (cb) {
    html();
    css();
    js();
    copyJsVendor();
    imageMin();
    copyAllFonts();
    browserSync.reload();
    cb();
  })


}

exports.dist = series(cleanAll, html, css, js, imageMin, copyJsVendor, copySitemap, copyRobots, copyAllFonts);
exports.dev = series(cleanAll, html, css, js, copyJsVendor, imageMin, copyAllFonts, server);