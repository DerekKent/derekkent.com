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
        'last 2 versions',
        'not ie < 11'
    ],
    name: project.name,
    version: project.version,
    license: project.license,
    watchOpts: {
        useFsEvents: true
    }
};
