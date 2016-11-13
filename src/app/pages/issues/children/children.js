import {Controller} from 'superb';
import {description as template} from './children.html';

export default class Children extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/children/children.css';
        this.view = {
            tag: 'main',
            classes: ['issues_children-page', 'page']
        };
    }

}
