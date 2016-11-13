import {Controller} from 'superb';
import {description as template} from './family.html';

export default class Family extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/family/family.css';
        this.view = {
            tag: 'main',
            classes: ['issues_family-page', 'page']
        };
    }

}
