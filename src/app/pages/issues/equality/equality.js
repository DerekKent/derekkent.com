import {Controller} from 'superb';
import {description as template} from './equality.html';

export default class Equality extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/equality/equality.css';
        this.view = {
            tag: 'main',
            classes: ['issues_equality-page', 'page']
        };
    }

}
