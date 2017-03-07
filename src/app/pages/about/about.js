import {Controller} from 'superb';
import {description as template} from './about.html.js';

export default class About extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/about/about.css';
        this.view = {
            tag: 'main',
            classes: ['about-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'About — Derek Kent';
    }

}
