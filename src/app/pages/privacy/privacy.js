import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import {default as analytics, optedOut, optedIn} from '~/handlers/analytics.js';
import template from './privacy.html.js';

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

    onLoaded() {
        document.title = 'Privacy Policy — Derek Kent';
    }

    @on('click .opt-in')
    onOptIn() {
        analytics.optIn();
        this.update();
        this.el.querySelector('.opt-out').focus();
    }

    @on('click .opt-out')
    onOptOut() {
        analytics.optOut();
        this.update();
        this.el.querySelector('.opt-in').focus();
    }

}
