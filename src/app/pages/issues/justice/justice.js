import {Controller} from 'superb';
import template from './justice.html.js';

export default class Justice extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/justice/justice.css';
        this.view = {
            tag: 'main',
            classes: ['issues_justice-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Criminal Justice Reform — Derek Kent';
    }

}
