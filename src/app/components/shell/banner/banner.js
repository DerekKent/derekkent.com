import {Controller} from 'superb';
import template from './banner.html.js';

const ELECTION = new Date('2018-06-26T00:00:00-04:00');
const ELECTION_END = new Date('2018-06-26T20:00:00-04:00');
const EARLY_VOTING = new Date('2018-06-14T00:00:00-04:00');
const EARLY_VOTING_END = new Date('2018-06-21T20:00:00-04:00');

const NOTICES = [{
    message: 'Early voting begins June 14th.',
    class: 'banner-normal',
    start: (new Date(EARLY_VOTING)).setDate(EARLY_VOTING.getDate() - 7),
    end: (new Date(EARLY_VOTING)).setDate(EARLY_VOTING.getDate() - 1),
    link: '/voting'
}, {
    message: 'Early voting begins tomorrow.',
    class: 'banner-notice',
    start: (new Date(EARLY_VOTING)).setDate(EARLY_VOTING.getDate() - 1),
    end: EARLY_VOTING,
    link: '/voting'
}, {
    message: 'Early voting centers are open today.',
    class: 'banner-alert',
    start: EARLY_VOTING,
    end: EARLY_VOTING_END,
    link: '/voting'
}, {
    message: 'Election Day is June 26th.',
    class: 'banner-normal',
    start: EARLY_VOTING_END,
    end: (new Date(ELECTION)).setDate(ELECTION.getDate() - 1),
    link: '/voting'
}, {
    message: 'Election Day is tomorrow.',
    class: 'banner-notice',
    start: (new Date(ELECTION)).setDate(ELECTION.getDate() - 1),
    end: ELECTION,
    link: '/voting'
}, {
    message: 'Today is Election Day!',
    class: 'banner-alert',
    start: ELECTION,
    end: ELECTION_END,
    link: '/voting'
}];

class Banner extends Controller {

    init() {
        this.template = template;
        this.css = '/app/components/shell/banner/banner.css';
        this.view = {
            classes: ['page-banner']
        };

        this.model = this.currentNotice();

        if (this.model && this.model.class) {
            this.view.classes.push(this.model.class);
        } else {
            this.view.classes.push('hidden');
        }
    }

    currentNotice() {
        const now = Date.now();

        for (const notice of NOTICES) {
            if (now >= notice.start && now < notice.end) {
                return notice;
            }
        }

        return null;
    }

}

const banner = new Banner();

export default banner;
