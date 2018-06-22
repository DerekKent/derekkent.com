import {Controller} from 'superb';
import template from './voting.html.js';

const EARLY_VOTING_END = new Date('2018-06-21T20:00:00-04:00');

export default class Voting extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/voting/voting.css';
        this.view = {
            tag: 'main',
            classes: ['voting-page', 'page']
        };

        this.model = Date.now() > EARLY_VOTING_END ? 'primary' : 'early';
    }

    onLoaded() {
        document.title = 'Voting Locations and Times — Derek Kent';
    }

}
