'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './src/*.css'
    ],
    docs: './docs/',
    mainJS: './src/main.js'
  }
}

// Starts locl development server
gulp.task('connect',() => {
    connect.server({
      root: ['docs'],
      port: config.port,
      base: config.devBaseUrl,
      livereload: true
    });
});

// Opens 'index.html' after web port has been connected
gulp.task('open',['connect'],function(){
  gulp.src('docs/index.html')
  .pipe(open({
    uri: config.devBaseUrl + ":" + config.port + '/'
  }));
});

// Bundles  HTML files
gulp.task('html',function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.docs))
  .pipe(connect.reload());
});

// Bundles CSS files
gulp.task('css',function(){
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.docs + '/css'));
});

// Bundles JS files
gulp.task('js',function(){
  browserify(config.paths.mainJS)
  .transform(reactify)
  .bundle()
  .on('error',console.error.bind(console))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.paths.docs + '/scripts'))
  .pipe(connect.reload());
});

// Lint files from ES6 to ES5
gulp.task('lint',function(){
  return gulp.src(config.paths.js)
  .pipe(lint({config: 'eslint.config.json'}))
  .pipe(lint.format());
});

gulp.task('watch',function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch(config.paths.js, ['js','lint']);
});

gulp.task('default',['html','js','css','lint','open','watch']);
