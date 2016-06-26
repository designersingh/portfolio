/**
 * Created by tajinderpalsohi on 6/25/16.
 */
'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var modRewrite = require('connect-modrewrite');
var htmlReplace  = require('gulp-html-replace');
var concat  = require('gulp-concat');
var ngAnnotate  = require('gulp-ng-annotate');
var uglify  = require('gulp-uglify');
var es  = require('event-stream');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var urlAdjuster = require('gulp-css-url-adjuster');
var gulpInject = require('gulp-inject');

gulp.task('serve', function(){
    browserSync.init('./app/**/*.*',{
        server:{
            baseDir:'./app',
            middleware: [historyApiFallback()]
        }
    });
});


gulp.task('serve:dist', function(){
    browserSync.init({
        server:{
            baseDir:'./dist',
            middleware: [historyApiFallback()]
        }
    });
});

gulp.task('bower', function () {
    // It's not necessary to read the files (will speed up things), we're only after their paths:

    gulp.src('./app/index.html')
        .pipe(wiredep({
            bowerJson: require('./bower.json')
        }))
        .pipe(gulpInject(gulp.src(['./app/js/**/*.js', './app/css/**/*.css'], {read: false}), {ignorePath: '/app'}))
        .pipe(gulp.dest('./app'));
});

gulp.task('htmlReplace', function(){

    gulp.src('./app/index.html')
        .pipe(htmlReplace({
            'vendor': 'js/vendor.js',
            'source':'js/bundle.js',
            'css':'css/all.css'
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('bundle:source', function(){

    gulp.src([
            './app/js/app.js',
            './app/js/**/*.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))

});




gulp.task('bundle:vendor', function(){

    return gulp.src([
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.min.js',
            'app/bower_components/angular-sanitize/angular-sanitize.min.js',
            'app/bower_components/angular-timeline/dist/angular-timeline.js',
            'app/bower_components/angular-carousel/dist/angular-carousel.min.js',
            'app/bower_components/angular-touch/angular-touch.min.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/skrollr/dist/skrollr.min.js',
            'app/bower_components/angular-skrollr/dist/angular-skrollr.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.js',
            'app/bower_components/flat-ui/dist/js/flat-ui.js',
            'app/bower_components/pace/pace.js',
            'app/bower_components/video-js/dist/video-js/video.js',
            'app/bower_components/ngDialog/js/ngDialog.min.js',
            'app/bower_components/ng-text-truncate/ng-text-truncate.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))

});


gulp.task('copy:css',function(){

    return gulp.src(['app/css/**/*.css',
            'app/bower_components/bootstrap/dist/css/bootstrap.css',
            'app/bower_components/animate.css/animate.css',
            'app/bower_components/fontawesome/css/font-awesome.min.css',
            'app/bower_components/angular-carousel/dist/angular-carousel.css',
            'app/bower_components/angular-timeline/dist/angular-timeline.css',
            'app/bower_components/ngDialog/css/ngDialog.css',
            'app/bower_components/ngDialog/css/ngDialog-theme-default.css',
        ])
        .pipe(concatCss('all.css'))
        .pipe(urlAdjuster({
            replace:['bower_components/bootstrap/dist/','/']
        }))
        .pipe(urlAdjuster({
            replace:['bower_components/fontawesome/','/']
        }))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))

});

gulp.task('copy:fonts',function(){

    gulp.src([
            'app/bower_components/bootstrap/fonts/**/**.*',
            'app/bower_components/fontawesome/fonts/**/**.*',
            'app/bower_components/flat-ui/fonts/**/**.*',
        ])
        .pipe(gulp.dest('./dist/fonts'))

});

gulp.task('copy:html',function(){

    gulp.src('app/partials/**/*.html')
        .pipe(gulp.dest('./dist/partials'))

});

gulp.task('copy:images',function(){

    gulp.src('app/images/**/*.*')
        .pipe(gulp.dest('./dist/images'))

});

gulp.task('build',['htmlReplace','bundle:vendor','bundle:source','copy:css','copy:html', 'copy:images','copy:fonts'])


gulp.task('default', ['serve']);