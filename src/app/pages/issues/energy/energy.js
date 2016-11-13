import {Controller} from 'superb';
import {description as template} from './energy.html';

export default class Energy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/energy/energy.css';
        this.view = {
            tag: 'main',
            classes: ['issues_energy-page', 'page']
        };
    }

}
