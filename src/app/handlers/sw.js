/* eslint-disable no-console */

class ServiceWorker {

    async register() {
        if ('@ENV@' === 'production' && 'serviceWorker' in navigator) {
            try {
                this.registration = await navigator.serviceWorker.register('/sw.js');
            } catch (err) {
                console.error('Error during service worker registration:', err);

                return;
            }

            if (typeof this.registration.update === 'function') {
                this.registration.update();
            }

            this.registration.onupdatefound = this.onupdatefound.bind(this);
        }
    }

    onupdatefound() {
        const installingWorker = this.registration.installing;

        installingWorker.onstatechange = () => {
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
    }

}

const sw = new ServiceWorker();

export default sw;
