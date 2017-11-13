const fs = require('fs');
const argv = require('yargs').argv;
const project = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

module.exports = {
    get env() {
        let env = process.env.NODE_ENV || 'development';

        if (argv.production || env === 'production') {
            env = 'production';
        }

        return env;
    },
    get dest() {
        return (this.env === 'development' ? 'dev' : 'dist');
    },
    src: 'src',
    browsers: [
        // Desktop
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 Edge versions',
        'Firefox ESR',
        'IE 11',

        // Mobile
        'last 2 iOS versions',
        'last 2 ChromeAndroid versions'
    ],
    name: project.name,
    version: project.version,
    license: project.license,
    watchOpts: {
        useFsEvents: true
    }
};
