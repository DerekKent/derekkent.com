import 'babel-polyfill';
import '~/polyfills/object-assign.js';
import {utils} from 'superb';
import router from '~/router.js';
import accessibility from '~/handlers/accessibility.js';
import shell from '~/components/shell/shell.js';

if ('@ENV@' === 'production' && 'serviceWorker' in navigator) {
    /* eslint no-console: 0 */
    navigator.serviceWorker.register('/sw.js').then((registration) => {
        if (typeof registration.update === 'function') {
            registration.update();
        }

        registration.onupdatefound = function () {
            const installingWorker = registration.installing;

            installingWorker.onstatechange = function () {
                switch (installingWorker.state) {
                case 'installed':
                    if (navigator.serviceWorker.controller) {
                        console.log('New or updated content is available.');
                    } else {
                        console.log('Content is now available offline!');
                    }
                    break;
                case 'redundant':
                    console.error('The installing service worker became redundant.');
                    break;
                default:
                    break;
                }
            };
        };
    }).catch((e) => {
        console.error('Error during service worker registration:', e);
    });
}

class App {

    constructor() {
        this.shell = shell;
        router.start();
        accessibility.update();

        utils.injectCSS('/styles/main.css');
        utils.injectCSS('https://fonts.googleapis.com/css?family=Open+Sans:400,300');
    }

}

const app = new App();

export default app;
