import linkHelper from '~/helpers/link';

const analyticsID = 'UA-77275133-1';
const RELATIVE_TO_ROOT = /^\//;

export function optedOut() {
    const dnt = window.localStorage.getItem('dnt');

    return (navigator.doNotTrack === '1' ||
           window.doNotTrack === '1' ||
           dnt === '1') &&
           dnt !== '0';
}

export function optedIn() {
    const dnt = window.localStorage.getItem('dnt');

    return dnt === '0';
}

const SETUP_GA = Symbol();
const REMOVE_GA = Symbol();

class Analytics {

    constructor() {
        this.start();
    }

    get tracking() {
        return !optedOut() || optedIn();
    }

    start() {
        if (this.tracking) {
            this[SETUP_GA]();
        }
    }

    stop() {
        this[REMOVE_GA]();
    }

    send(fields) {
        if (this.tracking) {
            SystemJS.import('ga').then(() => {
                window.ga('send', fields);
            });
        }
    }

    sendPageview(page) {
        let frag = page || location.pathname;

        if (!(RELATIVE_TO_ROOT).test(frag)) {
            frag = `/${frag}`;
        }

        this.send({
            hitType: 'pageview',
            page: frag
        });
    }

    sendEvent(fields) {
        this.send(Object.assign(
            {hitType: 'event'},
            fields
        ));
    }

    record(href) {
        if (linkHelper.isExternal(href)) {
            this.sendEvent({
                eventCategory: 'External',
                eventAction: 'open',
                eventLabel: href
            });
        }
    }

    optIn() {
        window.localStorage.setItem('dnt', 0);
        this.start();
    }

    optOut() {
        window.localStorage.setItem('dnt', 1);
        this.stop();
    }

    [SETUP_GA]() {
        if (typeof window.ga !== 'function') {
            window.GoogleAnalyticsObject = 'ga';
            window.ga = {
                q: [['create', analyticsID, 'auto']],
                l: Date.now()
            };
        } else {
            window.ga('create', analyticsID, 'auto');
        }
    }

    [REMOVE_GA]() {
        if (typeof window.ga === 'function') {
            window.ga('remove');
        }
    }

}

const analytics = new Analytics();

export default analytics;
