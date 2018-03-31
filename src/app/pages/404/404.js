import {Controller} from 'superb';
import template from './404.html.js';

export default class FourOhFour extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/404/404.css';
        this.view = {
            tag: 'main',
            classes: ['not-found-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Page Not Found — Derek Kent';
    }

}
