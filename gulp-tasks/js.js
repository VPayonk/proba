const gulp = require('gulp');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const sync = require('browser-sync').get('sync');

const config = require('../config');


gulp.task('js', function() {
    gulp.src(config.src.dev_js + '**/*.js')
        .pipe(babel({
            presets: ["env", "minify"]
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.src.js))
        .pipe(sync.stream());
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.dev_js + '**/*.js', ['js']);
});