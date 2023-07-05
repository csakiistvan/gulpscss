const
  gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass')(require('sass'));

const paths = {
  styles: {
    scss: 'src/scss/app.scss',
    dest: 'dist/css',
    watch: 'src/scss/**/*.scss'
  },
  images: {
    src: "src/images/**/*.*",
    dest: "dist/images/"
  },
  js: {
    src: "src/js/**/*.*",
    dest: "dist/js/"
  }
}

// Styles
gulp.task('appStyle', (done) => {
  gulp
    .src(paths.styles.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 3 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
  done();
})

// Images
gulp.task('images', (done) => {
  gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
  done();
})

// Javascript
gulp.task('js', (done) => {
  gulp
    .src(paths.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
  done();
})

gulp.task('build', gulp.series('js', 'images', 'appStyle'));

gulp.task('watch', function () {
  gulp.watch(paths.styles.watch, gulp.task('appStyle'))
  gulp.watch(paths.images.src, gulp.task('images'))
  gulp.watch(paths.js.src, gulp.task('js'))
});
