const url = require('url');
const path = require('path');
const Module = require('module');
const jspm = require('jspm');
const load = Module._load;

jspm.setPackagePath('../../../');

const System = jspm.Loader();

System.config({
    paths: {
        '~/*': path.normalize(`${__dirname}/../../dev/app/*`)
    }
});

Module._load = (name, m) => {
    try {
        return load(name, m);
    } catch (e) {
        var normalizedName;

        if (name.indexOf('.') === 0) {
            normalizedName = path.normalize(`${path.dirname(m.filename)}/${name}.js`);
        } else {
            normalizedName = url.parse(System.normalizeSync(name)).path;
        }

        return load(normalizedName, m);
    }
};
