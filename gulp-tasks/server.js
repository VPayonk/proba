const gulp = require('gulp');
const sync = require('browser-sync').get('sync');
const config = require('../config');


gulp.task('server', function() {
    sync.init({
        server: {
            baseDir: config.src.production,
        },
        logLevel: 'info',
        notify: false,
    });
});
