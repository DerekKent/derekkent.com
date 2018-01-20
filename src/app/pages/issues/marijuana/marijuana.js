import {Controller} from 'superb';
import template from './marijuana.html.js';

export default class Marijuana extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/marijuana/marijuana.css';
        this.view = {
            tag: 'main',
            classes: ['issues_marijuana-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Marijuana — Derek Kent';
    }

}
