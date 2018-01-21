import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import {track} from '~/helpers/conversions.js';
import xhr from '~/handlers/xhr.js';
import template from './home.html.js';

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
    async onSubscribeSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.delegateTarget);

        this.model.error = false;
        this.model.submitting = true;
        this.update();

        try {
            await xhr.put('https://derekkent.com/api/v1/subscribe', data);
        } catch (err) {
            this.model.thanks = false;
            this.model.error = true;
            this.update();

            return;
        } finally {
            this.model.submitting = false;
            this.update();
        }

        this.model.thanks = 'Welcome!';
        this.update();

        track('rE4FCMLavGwQiO3yowM');

        setTimeout(() => {
            this.model.thanks = false;
            this.model.donate = true;
            this.update();
        }, 2000);
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
