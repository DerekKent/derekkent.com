import {Controller} from 'superb';
import template from './wages.html.js';

export default class Wages extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/wages/wages.css';
        this.view = {
            tag: 'main',
            classes: ['issues_wages-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Living Wages — Derek Kent';
    }

}
