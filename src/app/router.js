import {Router} from 'superb';
import analytics from '~/helpers/analytics';
import linkHelper from '~/helpers/link';
import shell from '~/components/shell/shell';

const pages = [
    'about',
    'accessibility',
    'contribute',
    'events',
    'issues',
    'join',
    'map',
    'news',
    'privacy'
];

class AppRouter extends Router {

    init() {
        this.defaultRegion = shell.regions.main;

        this.default('404');
        this.root('home');
        this.route('issues/:issue', {view: 'issues'});

        for (const page of pages) {
            this.route(page);
        }
    }

    start() {
        super.start();

        analytics.sendPageview(location.pathname);

        this.linkHandler = AppRouter.linkHandler.bind(this);
        document.addEventListener('click', this.linkHandler);
    }

    stop() {
        super.stop();

        document.removeEventListener('click', this.linkHandler);
    }

    navigate(...args) {
        super.navigate(...args);
        analytics.sendPageview();
    }

    static linkHandler(e) {
        const el = linkHelper.validUrlClick(e);

        if (!el) {
            return;
        }

        const href = el.getAttribute('href');

        e.preventDefault();

        if (linkHelper.isExternal(href)) {
            analytics.record(href);

            if (el.getAttribute('data-local') === 'true') {
                document.location.href = href;
            } else {
                window.open(href, '_blank');
            }
        } else {
            this.navigate(href);
        }
    }

}

const router = new AppRouter();

export default router;
