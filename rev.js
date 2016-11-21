/**
 * Created by Thinkpad on 2016/11/8.
 */
var gulp=require('gulp'),
    rev=require('gulp-rev'),
    gulp=require('gulp');

gulp.task('rev',function(){
    return gulp.src('css/*.css')
                .pipe(gulp.dest('rev'))
                .pipe(rev())
                .pipe(gulp.dest('rev'))
});