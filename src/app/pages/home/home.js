import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators';
import analytics from '~/handlers/analytics';
import {description as template} from './home.html';

const USER_NAV_KEYS = [9, 13];
const USER_INPUT_KEYS = [13, 32];

export default class Home extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/home/home.css';
        this.view = {
            tag: 'main',
            classes: ['home-page', 'page']
        };

        this.model = {
            thanks: false,
            donate: false,
            amt: 10
        };
    }

    onLoaded() {
        document.title = 'Derek Kent for Maryland District 32 Delegate';
    }

    @on('submit .subscribe')
    onSubscribeSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.delegateTarget);

        this.model.error = false;
        this.model.submitting = true;
        this.update();

        fetch('https://derekkent.com/api/v1/subscribe', {
            method: 'PUT',
            body: data
        }).then(() => {
            this.model.submitting = false;
            this.model.thanks = 'Welcome!';
            this.update();

            if (analytics.tracking) {
                SystemJS.import('conversions').then(() => {
                    window.google_trackConversion({
                        'google_conversion_id': 880588424,
                        'google_conversion_label': 'rE4FCMLavGwQiO3yowM',
                        'google_remarketing_only': false
                    });
                });
            }

            setTimeout(() => {
                this.model.thanks = false;
                this.model.donate = true;
                this.update();
            }, 2000);
        }).catch(() => {
            this.model.thanks = false;
            this.model.submitting = false;
            this.model.error = true;
            this.update();
        });
    }

    @on('click .donation-wrapper input')
    @on('focus .donation-wrapper input')
    @on('keydown .donation-wrapper input')
    onToggleDonationValue(e) {
        const input = e.delegateTarget;

        if (e instanceof KeyboardEvent && USER_NAV_KEYS.includes(e.keyCode)) {
            return;
        }

        this.model.amt = Number(input.getAttribute('value'));
        this.model.other = input.type === 'number';
        this.update();
    }

    @on('click .toggle-citations')
    @on('keydown .toggle-citations')
    toggleCitations(e) {
        if (e instanceof KeyboardEvent && !USER_INPUT_KEYS.includes(e.keyCode)) {
            return;
        }

        e.preventDefault();

        this.model.citations = !this.model.citations;
        this.update();
    }

}
