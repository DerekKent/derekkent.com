import {Controller} from 'superb';
import {description as template} from './environment.html.js';

export default class Environment extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/environment/environment.css';
        this.view = {
            tag: 'main',
            classes: ['issues_environment-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Protecting Our Environment — Derek Kent';
    }

}
