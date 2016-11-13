import {Controller} from 'superb';
import {description as template} from './wages.html';

export default class Wages extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/wages/wages.css';
        this.view = {
            tag: 'main',
            classes: ['issues_wages-page', 'page']
        };
    }

}
