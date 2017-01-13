import {Controller} from 'superb';
import {description as template} from './consumers.html';

export default class Consumers extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/consumers/consumers.css';
        this.view = {
            tag: 'main',
            classes: ['issues_consumers-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Consumer Protection — Derek Kent';
    }

}
