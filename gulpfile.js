var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
    return gulp.src('_source/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('_dist/'));
});

gulp.task('default', function() {
	gulp.watch('_source/index.html', ['html']);    

});	