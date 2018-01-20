import {Controller} from 'superb';
import template from './government.html.js';

export default class Government extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/government/government.css';
        this.view = {
            tag: 'main',
            classes: ['issues_government-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Government For The People — Derek Kent';
    }

}
