const
  gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass')(require('sass'));

const paths = {
  theme: {
    scss: 'scss/app.scss',
    dest: 'css',
    watch: 'scss/**/*.scss',
  }
}
// Styles
gulp.task('appStyle', (done) => {
  gulp
    .src(paths.theme.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.theme.dest));
  done();
})

gulp.task('watch', function () {
  gulp.watch(paths.theme.watch, gulp.task('appStyle'))
});