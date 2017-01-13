import {Controller} from 'superb';
import {description as template} from './opengov.html';

export default class OpenGov extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/opengov/opengov.css';
        this.view = {
            tag: 'main',
            classes: ['issues_opengov-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Open Government — Derek Kent';
    }

}
