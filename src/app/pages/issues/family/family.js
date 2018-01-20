import {Controller} from 'superb';
import template from './family.html.js';

export default class Family extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/family/family.css';
        this.view = {
            tag: 'main',
            classes: ['issues_family-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Supporting Families — Derek Kent';
    }

}
