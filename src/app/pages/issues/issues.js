import {Controller} from 'superb';
import {description as template} from './issues.html';

export default class Issues extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/issues.css';
        this.view = {
            tag: 'main',
            classes: ['issues-page', 'page']
        };
    }

}
