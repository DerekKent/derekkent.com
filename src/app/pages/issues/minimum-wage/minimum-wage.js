import {Controller} from 'superb';
import template from './minimum-wage.html.js';

export default class MinimumWage extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/minimum-wage/minimum-wage.css';
        this.view = {
            tag: 'main',
            classes: ['issues_minimum-wage-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Minimum Wage — Derek Kent';
    }

}
