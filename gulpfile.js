'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babelify = require("babelify");
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var server = require('gulp-express');
var flatten = require('gulp-flatten');
var swig = require('gulp-swig');
var data = require('gulp-data');

var getJsonData = function(file) {
  return require('./app/api/' + file + '.json');
};

gulp.task('server', function () {
    server.run(['server.js']);
    gulp.watch(['build/**/*.*'], server.notify);
});

gulp.task('html', function () {
  gulp.src('./app/views/**/*.html, ./app/components/**/*.html',{base: './app'})
    .pipe(flatten())
    .pipe(gulp.dest('./build/views'));  
});

gulp.task('browserify', function () {
  gulp.src(['./app/app.js', './app/docs.js'], {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('json', function() {
  gulp.src('./app/api/**/*.json')
  .pipe(gulp.dest('./build/api'));
});

gulp.task('static', function() {

  var templates = [
    "index",
    "documentation",
    "examples",
    "demos/dash"
  ]

  templates.forEach(function(template){

    var dest = (template.indexOf('demos/') > -1) ? './build/demos': './build/';
    var obj = {
      "docs" : getJsonData('includes'),
      "version" : getJsonData('version').version,
      "siteTitle" : "includes | A sass library for awesome modern web interfaces"
    }

    obj.template = template;

    gulp.src('./app/views/'+template+'.html')
      .pipe(data(obj))
      .pipe(swig())
      .pipe(gulp.dest(dest))
  });

});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      css: './build/css',
      sass: './app'
    }))
    .pipe(minifyCSS())
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.html', ['frontEnd']);
  gulp.watch('app/**/*.scss', ['frontEnd']);
  gulp.watch('app/**/*.js', ['frontEnd']);
});

gulp.task('frontEnd', ['browserify', 'compass', 'static', 'json']);
gulp.task('default', ['browserify', 'compass', 'static', 'json', 'watch', 'server']);