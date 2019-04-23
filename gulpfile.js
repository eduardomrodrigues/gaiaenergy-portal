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
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const tsc = require("gulp-typescript");
const tsProject = tsc.createProject("tsconfig.json");


function transformSass() {
  return src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/css'));
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
    .pipe(dest('build'));
}

function copySitemap() {
  return src('app/sitemap.xml')
    .pipe(dest('build'));
}


function copyAllFonts() {
  return src('app/fonts/*')
    .pipe(dest('build/fonts'));
}

function copyRobots() {
  return src('app/robots.txt')
    .pipe(dest('build'));
}

function css() {
  return src('app/css', {
      allowEmpty: true
    })
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build'));
}

function js() {

  return src('app/ts/**/*.ts')
    .pipe(tsProject())
    .pipe(dest('build/tmp/js'))
    .pipe(src('build/tmp/*.js', {
      sourcemaps: true
    }))
    .pipe(concat('js/app.min.js'))
    .pipe(uglify())
    .pipe(dest('build', {
      sourcemaps: true
    }));

}


function removeTmp() {

  return src('./build/tmp', {
    allowEmpty: true
  }).pipe(clean({
    force: true
  }));


}


function imageMin() {
  return src('app/images/*')
    .pipe(imagemin())
    .pipe(dest('build/images'));

}

function server() {

  browserSync.init({
    watch: true,
    server: "./build",
  });

  watch(['app/**/*'], function (cb) {
    transformSass();
    html();
    css();
    copySitemap();
    copyRobots();
    js();
    imageMin();
    removeTmp();

    browserSync.reload();
    cb();
  })


}



<<<<<<< HEAD
exports.dist = series(cleanAll, transformSass, html, css, js, imageMin, copySitemap, copyRobots, removeTmp);
exports.dev = series(cleanAll, transformSass, html, css, js, imageMin, copySitemap, copyRobots, removeTmp, server);
=======
exports.dist = series(cleanAll, transformSass, html, css, js, imageMin, copySitemap, copyRobots, copyJsVendor, copyCssVendor, copyAllFonts, removeTmp);
exports.dev = series(cleanAll, transformSass, html, css, js, imageMin, removeTmp, copySitemap, copyRobots, copyJsVendor, copyCssVendor, copyAllFonts, server);
>>>>>>> d1c0a07d2d1774497a22e77b89c15316aaf70528
