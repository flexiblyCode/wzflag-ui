const gulp = require('gulp');
const sass = require('gulp-sass')( require ( 'sass' ) )  //sass转成css
const minifyCSS = require('gulp-minify-css') //压缩
gulp.task('buildsass', function(){
    return gulp.src('packages/style/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/ui-style'))
})
gulp.task('buildfont', function(){
    return gulp.src('packages/style/src/fonts/**')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/ui-style/fonts'));
})
gulp.task('build', gulp.parallel('buildsass', 'buildfont'))
