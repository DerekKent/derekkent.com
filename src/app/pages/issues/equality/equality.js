import {Controller} from 'superb';
import template from './equality.html.js';

export default class Equality extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/equality/equality.css';
        this.view = {
            tag: 'main',
            classes: ['issues_equality-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Equality — Derek Kent';
    }

}
