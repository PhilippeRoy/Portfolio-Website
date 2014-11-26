var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src(__dirname + '/sass/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(__dirname + '/public/stylesheets/'));
  });


gulp.task('default', ['sass']);
