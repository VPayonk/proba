const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sync = require('browser-sync').get('sync');

const config = require('../config');


gulp.task('scss', function() {
    return gulp.src(config.src.scss + '**/*.scss')

        // compile
        .pipe(sass({
            // outputStyle: 'compressed'
        })
        .on('error', config.errorHandler))

        // postcss
        .pipe(postcss([

            // autoprefixer
            autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
            }),

        ]))

        // optimization
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: 0,
                },
                2: {
                    mergeAdjacentRules: true,
                    mergeIntoShorthands: true,
                    mergeMedia: true,
                    mergeSemantically: false,
                    overrideProperties: true,
                    removeEmpty: true,
                    reduceNonAdjacentRules: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                }
            }
        }))

        .pipe(gulp.dest(config.src.css))
        .pipe(sync.stream());
});

gulp.task('scss:watch', function() {
    gulp.watch(config.src.scss + '**/*.scss', ['scss']);
});
