import {Controller} from 'superb';
import template from './children.html.js';

export default class Children extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/children/children.css';
        this.view = {
            tag: 'main',
            classes: ['issues_children-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Our Children\'s Future — Derek Kent';
    }

}
