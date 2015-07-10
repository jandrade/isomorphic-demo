var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
// Basic usage 
gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('app/main.js')
        .pipe(browserify({
          insertGlobals : false,
          debug : !gulp.env.production,
          transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./assets/js/'))
});

gulp.task('default', ['scripts']);