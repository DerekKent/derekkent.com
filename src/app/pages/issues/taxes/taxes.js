import {Controller} from 'superb';
import {description as template} from './taxes.html';

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
