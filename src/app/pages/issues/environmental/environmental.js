import {Controller} from 'superb';
import template from './environmental.html.js';

export default class Environmental extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/environmental/environmental.css';
        this.view = {
            tag: 'main',
            classes: ['issues_environmental-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Protect Our Environment — Derek Kent';
    }

}
