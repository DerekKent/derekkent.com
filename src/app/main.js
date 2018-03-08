import 'babel-polyfill';
import '~/polyfills/object-assign.js';
import {utils} from 'superb';
import router from '~/router.js';
import sw from '~/handlers/sw.js';
import accessibility from '~/handlers/accessibility.js';
import shell from '~/components/shell/shell.js';

class App {

    constructor() {
        this.shell = shell;
        router.start();
        accessibility.update();

        utils.injectCSS('/styles/main.css');
        utils.injectCSS('https://fonts.googleapis.com/css?family=Open+Sans:400,300');
    }

}

sw.register();

const app = new App();

export default app;
