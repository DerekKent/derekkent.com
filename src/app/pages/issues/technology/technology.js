import {Controller} from 'superb';
import {description as template} from './technology.html';

export default class Technology extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/technology/technology.css';
        this.view = {
            tag: 'main',
            classes: ['issues_technology-page', 'page']
        };
    }

}
