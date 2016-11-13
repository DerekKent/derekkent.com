import {Controller} from 'superb';
import {description as template} from './government.html';

export default class Government extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/government/government.css';
        this.view = {
            tag: 'main',
            classes: ['issues_government-page', 'page']
        };
    }

}