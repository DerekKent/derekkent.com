import {Controller} from 'superb';
import {description as template} from './women.html.js';

export default class Women extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/women/women.css';
        this.view = {
            tag: 'main',
            classes: ['issues_women-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Women\'s Rights — Derek Kent';
    }

}
