import {Controller} from 'superb';
import template from './taxes.html.js';

export default class Taxes extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/taxes/taxes.css';
        this.view = {
            tag: 'main',
            classes: ['issues_taxes-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Taxes — Derek Kent';
    }

}
