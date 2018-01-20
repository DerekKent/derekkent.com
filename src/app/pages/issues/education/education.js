import {Controller} from 'superb';
import template from './education.html.js';

export default class Education extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/education/education.css';
        this.view = {
            tag: 'main',
            classes: ['issues_education-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Education — Derek Kent';
    }

}
