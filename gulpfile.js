var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css');


gulp.task('sass', function() {
    gulp.src(__dirname + '/sass/stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(__dirname + '/public/stylesheets/'));
  });


gulp.task('autoprefixer', function () {
    gulp.src(__dirname + '/public/stylesheets/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(__dirname + '/public/stylesheets/'));
  });


gulp.task('minify-css', function() {
   gulp.src(__dirname + '/public/stylesheets/*.css')
   .pipe(minifyCSS({keepBreaks:false}))
   .pipe(gulp.dest(__dirname + '/public/stylesheets/'));
  });

gulp.task('default', ['sass','autoprefixer', 'minify-css']);
