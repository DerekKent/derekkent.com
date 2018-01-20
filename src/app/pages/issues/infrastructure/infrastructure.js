import {Controller} from 'superb';
import template from './infrastructure.html.js';

export default class Infrastructure extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/infrastructure/infrastructure.css';
        this.view = {
            tag: 'main',
            classes: ['issues_infrastructure-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Infrastructure — Derek Kent';
    }

}
