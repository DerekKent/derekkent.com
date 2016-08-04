import {Controller} from 'superb';
import {description as template} from './accessibility.html';

export default class Accessibility extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/accessibility/accessibility.css';
        this.view = {
            tag: 'main',
            classes: ['accessibility-page', 'page']
        };
    }

}
