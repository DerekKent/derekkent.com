import {Controller} from 'superb';
import template from './endorsements.html.js';

const ENDORSEMENTS = [{
    name: '314 Action',
    image: '/images/endorsements/314action.png',
    link: 'http://www.314action.org/endorsed-candidates-1/'
}, {
    name: 'Freethought Equality Fund',
    image: '/images/endorsements/fef.png',
    link: 'http://freethoughtequality.org/2018-endorsements-state-local/'
}, {
    name: 'NARAL Pro-Choice Maryland PAC Endorsed Champion of Choice',
    image: '/images/endorsements/naral.png',
    link: 'https://maryland.prochoiceamericaaffiliates.org/wp-content/uploads/sites/11/2018/05/Endorsements.pdf'
}, {
    name: 'Political Revolution',
    image: '/images/endorsements/political-revolution.png',
    link: 'https://political-revolution.com/endorsements/'
}, {
    name: 'Run for Something',
    image: '/images/endorsements/run-for-something.png',
    link: 'https://runforsomething.net/candidates/derek-kent/'
}];

const RECOGNITIONS = [{
    name: 'Mom\'s Demand Action Gun Sense Candidate',
    image: '/images/endorsements/gun-sense.png',
    link: ''
}, {
    name: 'Represent Maryland Small Money Certified',
    image: '/images/endorsements/represent.maryland.png',
    link: ''
}, {
    name: '#VoteProChoice Recommended',
    image: '/images/endorsements/voteprochoice.png',
    link: ''
}];

export default class Endorsements extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/endorsements/endorsements.css';
        this.view = {
            tag: 'main',
            classes: ['endorsements-page', 'page']
        };
        this.model = {
            endorsements: ENDORSEMENTS,
            recognitions: RECOGNITIONS
        };
    }

    onLoaded() {
        document.title = 'Endorsements — Derek Kent';
    }

}
