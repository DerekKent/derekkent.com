import {Controller} from 'superb';
import {default as analytics, optedOut, optedIn} from '~/helpers/analytics';
import {description as template} from './privacy.html';

export default class Privacy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/privacy/privacy.css';
        this.view = {
            tag: 'main',
            classes: ['privacy-page', 'page']
        };

        this.model = () => {
            return {
                optedOut: optedOut(),
                optedIn: optedIn()
            };
        };

        this.events = {
            'click button.opt-in': () => {
                analytics.optIn();
                this.update();
            },

            'click button.opt-out': () => {
                analytics.optOut();
                this.update();
            }
        };
    }

}
