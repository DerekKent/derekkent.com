import {Controller} from 'superb';
import template from './issues.html.js';

export default class Issues extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/issues.css';
        this.view = {
            tag: 'main',
            classes: ['issues-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Issues — Derek Kent';
    }

}
