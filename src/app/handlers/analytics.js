import linkHelper from '~/helpers/link';

export const analyticsID = 'UA-77275133-1';
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
const DISABLE_GA = Symbol();

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
        this[DISABLE_GA]();
    }

    send(fields) {
        if (this.tracking) {
            return SystemJS.import('ga').then(() => {
                window.ga('send', fields);
            });
        }

        return Promise.resolve();
    }

    sendPageview(page) {
        let frag = page || location.pathname;

        if (!(RELATIVE_TO_ROOT).test(frag)) {
            frag = `/${frag}`;
        }

        return this.send({
            hitType: 'pageview',
            page: frag
        });
    }

    sendEvent(fields) {
        return this.send(Object.assign(
            {hitType: 'event'},
            fields
        ));
    }

    record(href) {
        const promises = [];

        if (linkHelper.isExternal(href)) {
            promises.push(this.sendEvent({
                eventCategory: 'External',
                eventAction: 'open',
                eventLabel: href
            }));
        }

        return Promise.all(promises);
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
        delete window[`ga-disable-${analyticsID}`];

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

    [DISABLE_GA]() {
        window[`ga-disable-${analyticsID}`] = true;
    }

}

const analytics = new Analytics();

export default analytics;
