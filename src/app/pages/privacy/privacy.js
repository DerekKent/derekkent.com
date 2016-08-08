import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators';
import {default as analytics, optedOut, optedIn} from '~/handlers/analytics';
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
    }

    @on('click .opt-in')
    onOptIn() {
        analytics.optIn();
        this.update();
    }

    @on('click .opt-out')
    onOptOut() {
        analytics.optOut();
        this.update();
    }

}
