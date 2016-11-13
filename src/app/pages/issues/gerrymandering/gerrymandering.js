import {Controller} from 'superb';
import {description as template} from './gerrymandering.html';

export default class Gerrymandering extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/gerrymandering/gerrymandering.css';
        this.view = {
            tag: 'main',
            classes: ['issues_gerrymandering-page', 'page']
        };
    }

}