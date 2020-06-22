const devPath = '_dev/'; // develope path
const productionPath = 'production/';  // production path

const config = {

    src: {

        // base
        dev: devPath,
        production: productionPath,

        // html
        dev_html: devPath + 'html/',
        html: productionPath,

        // css
        scss: devPath + 'scss/',
        css: productionPath + 'css/',

        // js
        dev_js: devPath + 'js/',
        js: productionPath + 'js/',

        // img
        dev_img: devPath + 'img/',
        img: productionPath + 'img/',

        // svg img
        // dev_imgSvg: devPath + 'img/svg/',
        // dev_imgSvgSprite: devPath + 'img/svg/svg-sprite/',
        // imgSvg: productionPath + 'img/svg/',
    },

    errorHandler: require('./gulp-tasks/errors')
};

module.exports = config;
