import {Controller} from 'superb';
import template from './guns.html.js';

export default class Guns extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/guns/guns.css';
        this.view = {
            tag: 'main',
            classes: ['issues_guns-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Responsible Gun Rights — Derek Kent';
    }

}
