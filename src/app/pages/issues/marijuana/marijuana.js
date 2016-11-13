import {Controller} from 'superb';
import {description as template} from './marijuana.html';

export default class Marijuana extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/marijuana/marijuana.css';
        this.view = {
            tag: 'main',
            classes: ['issues_marijuana-page', 'page']
        };
    }

}
