import {Controller} from 'superb';
import {description as template} from './about.html';

export default class About extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/about/about.css';
        this.view = {
            tag: 'main',
            classes: ['about-page']
        };
    }

}