import {Controller} from 'superb';
import {description as template} from './fracking.html';

export default class Fracking extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/fracking/fracking.css';
        this.view = {
            tag: 'main',
            classes: ['issues_fracking-page', 'page']
        };
    }

}
