import {Controller} from 'superb';
import template from './concession.html.js';

export default class Concession extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/concession/concession.css';
        this.view = {
            tag: 'main',
            classes: ['thankyou-page']
        };
    }

}
