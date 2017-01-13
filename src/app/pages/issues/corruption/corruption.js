import {Controller} from 'superb';
import {description as template} from './corruption.html';

export default class Corruption extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/corruption/corruption.css';
        this.view = {
            tag: 'main',
            classes: ['issues_corruption-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Money in Politics — Derek Kent';
    }

}
