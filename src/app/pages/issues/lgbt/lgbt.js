import {Controller} from 'superb';
import template from './lgbt.html.js';

export default class LGBT extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/lgbt/lgbt.css';
        this.view = {
            tag: 'main',
            classes: ['issues_lgbt-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'LGBTQ Rights — Derek Kent';
    }

}
