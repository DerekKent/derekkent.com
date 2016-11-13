import {Controller} from 'superb';
import {description as template} from './religion.html';

export default class Religion extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/religion/religion.css';
        this.view = {
            tag: 'main',
            classes: ['issues_religion-page', 'page']
        };
    }

}
