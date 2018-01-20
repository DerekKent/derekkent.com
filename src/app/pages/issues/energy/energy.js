import {Controller} from 'superb';
import template from './energy.html.js';

export default class Energy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/energy/energy.css';
        this.view = {
            tag: 'main',
            classes: ['issues_energy-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Clean Energy — Derek Kent';
    }

}
