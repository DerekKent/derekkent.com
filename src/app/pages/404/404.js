import {Controller} from 'superb';
import template from './404.html.js';

export default class FourOhFour extends Controller {

    init() {
        this.template = template;
        this.view = {
            tag: 'main'
        };
    }

    onLoaded() {
        document.title = 'Page Not Found — Derek Kent';
    }

}
