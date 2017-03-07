import {Controller} from 'superb';
import {description as template} from './elections.html.js';

export default class Elections extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/elections/elections.css';
        this.view = {
            tag: 'main',
            classes: ['issues_elections-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Modern Elections — Derek Kent';
    }

}
