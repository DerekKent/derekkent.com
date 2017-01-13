import {Controller} from 'superb';
import {description as template} from './minimum-wage.html';

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
