/**
 * Created by Thinkpad on 2016/11/4.
 */
var gulp=require('gulp'),
    minicss=require('gulp-clean-css'),
    sass=require('gulp-sass'),
    q=require('q');

//通过插件q的方法返回一个promise
/*gulp.task('one',function(){
    var defer= q.defer()
    setTimeout(function(){
        gulp.src('../sass/*scss',{style:'expanded'})
            .pipe(sass());
            .pipe(gulp.dest('../css/'));
        defer.resolve();
    },1)
    return defer.promise;
});*/

/*//通过回调函数的方式
gulp.task('one',function(cb){
    gulp.src('../sass/*scss',{style:'expanded'})
        .pipe(sass())
        .pipe(gulp.dest('../css/'));
})*/

//直接返回一个工作流
gulp.task('one',function(){
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

//这个是任务2
gulp.task("two",function(){
   return gulp.src('css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('mini'))
});

//这个是任务3
gulp.task("three",function(){
    return gulp.src('css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('mini3'))
});

//这样写one和two这2个任务是异步的
gulp.task('asyn',gulp.series('one','two'));

//这样写one和three这2个方法是同步的,这时候会发现没有生成mini3这个文件夹，因为是同步的，找不到css/*.css这个文件夹，所以压缩不了
gulp.task('sametine',gulp.parallel('one','three'))























