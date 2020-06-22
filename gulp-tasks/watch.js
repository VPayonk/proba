const gulp   = require('gulp');


gulp.task('watch',
    [
        'scss:watch',
        'nunjucks:watch',
        'js:watch',
    ]
);
