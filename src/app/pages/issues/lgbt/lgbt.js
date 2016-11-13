import {Controller} from 'superb';
import {description as template} from './lgbt.html';

export default class LGBT extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/lgbt/lgbt.css';
        this.view = {
            tag: 'main',
            classes: ['issues_lgbt-page', 'page']
        };
    }

}
