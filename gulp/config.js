const buildPath  = 'build',
      assetsPath = 'assets';

const config = {
    assets: {
        all    : assetsPath,
        html   : assetsPath,
        sass   : assetsPath + '/sass',
        js     : assetsPath + '/js',
        img    : assetsPath + '/img',
        svg    : assetsPath + '/img/svg',
        fonts  : assetsPath + '/fonts',
        lib    : assetsPath + '/lib',
    },
    build: {
        all  : buildPath,
        html : buildPath,
        css  : buildPath + '/css',
        js   : buildPath + '/js',
        img  : buildPath + '/img',
        svg  : buildPath + '/img/svg',
        fonts: buildPath + '/fonts',
        lib  : buildPath + '/lib',
    },
    errorHandler: require('./handle-errors')
};
module.exports = config;