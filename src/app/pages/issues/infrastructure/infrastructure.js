import {Controller} from 'superb';
import {description as template} from './infrastructure.html';

export default class Infrastructure extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/infrastructure/infrastructure.css';
        this.view = {
            tag: 'main',
            classes: ['issues_infrastructure-page', 'page']
        };
    }

}
