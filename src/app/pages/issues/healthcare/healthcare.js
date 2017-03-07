import {Controller} from 'superb';
import {description as template} from './healthcare.html.js';

export default class Healthcare extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/healthcare/healthcare.css';
        this.view = {
            tag: 'main',
            classes: ['issues_healthcare-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Universal Healthcare — Derek Kent';
    }

}
