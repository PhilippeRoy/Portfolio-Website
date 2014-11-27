var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
//    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// CSS
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


// gulp.task('minify-css', function() {
//    gulp.src(__dirname + '/public/stylesheets/*.css')
//    .pipe(minifyCSS({keepBreaks:false}))
//    .pipe(gulp.dest(__dirname + '/public/stylesheets/'));
//   });
gulp.task('concat-css', function() {
  gulp.src(__dirname + '/public/stylesheets/*.css')
  .pipe(concat('styles.min.js'))
  .pipe(gulp.dest(__dirname + '/public/stylesheets/production/'))
});



// JS
gulp.task('concat-scripts', function() {
    gulp.src(__dirname + '/public/javascripts/development/*.js')
    .pipe(concat('bundle.min.js', {newLine: ';'}))
    .pipe(gulp.dest(__dirname + '/public/javascripts/development/concat/'))
  });

gulp.task('compress', function() {
    gulp.src(__dirname + '/public/javascripts/development/concat/bundle.min.js')
    .pipe(uglify())
    .pipe(gulp.dest(__dirname + '/public/javascripts/production/'))
  });

gulp.task('default', ['sass','concat-css','autoprefixer','concat-scripts', 'compress']);
