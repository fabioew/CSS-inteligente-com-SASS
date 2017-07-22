var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var notify = require('gulp-notify');

//Copia e minifica todos os arquivos Html do _source/ para o _dist/
gulp.task('html', function() {
    return gulp.src('_source/*.html')
	    .pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('_dist/'));
});

//Copia, Compila, Transfere e Verifica possiveis erros.
gulp.task('sass', function() {
    return gulp.src('_source/scss/style.scss')
      .pipe(sass())
      .on("error", notify.onError({title: "OPA... TEM ALGUMA COISA ERRADA COM SEU CÓDIGO, VOCÊ DEVERIA DAR UMA OLHADA", message: "Error: <%= error.message %>"}))
      .pipe(cleanCss())
      .pipe(gulp.dest('_dist/css/'));
});

//Tarefa padrão do gulp
gulp.task('default', function() {
    gulp.watch('_source/index.html', ['html']);
    gulp.watch('_source/scss/**/*.scss', ['sass']);
});