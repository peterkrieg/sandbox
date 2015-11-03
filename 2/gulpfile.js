var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function() {
    return gulp.src('js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['scripts']);