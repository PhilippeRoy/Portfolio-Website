var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
//    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// CSS

gulp.task('css', function() {
  gulp.src(__dirname + '/sass/stylesheets/*.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    sync: true
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest(__dirname + '/public/stylesheets/production/'));
});



gulp.task('sass', function() {
    gulp.src(__dirname + '/sass/stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      sync: true
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
  .pipe(concat('styles.min.css'))
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

// Tasks
gulp.task('short', ['css','concat-scripts', 'compress']);
gulp.task('default', ['sass','autoprefixer','concat-css','concat-scripts', 'compress']);
