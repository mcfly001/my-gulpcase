/**
 * Created by Thinkpad on 2016/11/4.
 */
var gulp=require('gulp'),
    minicss=require('gulp-clean-css'),
    sass=require('gulp-sass'),
    q=require('q'),
    rename=require('gulp-rename'),
    sequence=require('run-sequence');

gulp.task('sass',function(){
    sass('../sass/*.scss')
        .pipe(gulp.dest('../sdsa/'))
});

//watch第一种用法，是先找到要监听的对象，后面添加一个任务
gulp.task('watchchange',function(){
    gulp.watch('../sass/*.scss',['sass']);
});
//watch第二种用法，是先找到要监听的对象，后面添加一个回调函数
gulp.task('watchchange2',function(){
    gulp.watch('../sass/*.scss',function(event){
        console.log(evnet);//这里的event包含变成的type以及路径
    });
});
//watch第三种用法，是先找到要监听的对象，只要改变（添加、删除、修改）后面可以是触发的回调函数change事件
/*除了change事件，watch方法还可能触发以下事件
end 回调函数运行完毕时触发
error 发生错误时触发
ready 当开始监听文件时触发
nomatch 没有匹配的监听文件时触发

watcher对象还包含其他一些方法
watcher.end() 停止watcher对象，不会再调用任务或回调函数
watcher.files() 返回watcher对象监视的文件
watcher.add(glob)增加所要监视的文件，它还可以附件第二个参数，表示回调函数
watcher.remove(filepath) 从watcher对象中移走一个监听的文件*/
gulp.task('watchchange3',function(){
    var watcher=gulp.watch('../sass/*.scss',function(){
        console.log('hasbeenwatch')
    })
    watcher.on('ready',function(event){
        console.log('dd')
    });
    watcher.on('change',function(event){
        console.log(event)
    });
    watcher.add('../css/*.css',function(){
        console.log('add')
    })
});

