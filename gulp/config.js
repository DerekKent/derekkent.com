const fs = require('fs');
const argv = require('yargs').argv;
const project = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const env = process.env.NODE_ENV;
const environments = new Map([
    [true, 'development'], // Default
    [env === 'test', 'test'],
    [env === 'production', 'production'],
    [argv.development, 'development'],
    [argv.test, 'test'],
    [argv.production, 'production']
]);
const target = {
    'development': 'dev',
    'production': 'dist',
    'test': 'test'
};

process.env.NODE_ENV = environments.get(true);

module.exports = {
    get env() {
        return process.env.NODE_ENV;
    },
    get dest() {
        return target[this.env];
    },
    src: 'src',
    browsers: [
        // Desktop
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 Edge versions',

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
