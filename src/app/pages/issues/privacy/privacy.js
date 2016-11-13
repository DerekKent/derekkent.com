import {Controller} from 'superb';
import {description as template} from './privacy.html';

export default class Privacy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/privacy/privacy.css';
        this.view = {
            tag: 'main',
            classes: ['issues_privacy-page', 'page']
        };
    }

}
