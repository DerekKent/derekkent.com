import {Controller} from 'superb';
import template from './voting.html.js';

export default class Voting extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/voting/voting.css';
        this.view = {
            tag: 'main',
            classes: ['voting-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Voting Locations and Times — Derek Kent';
    }

}
