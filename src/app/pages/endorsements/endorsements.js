import {Controller} from 'superb';
import template from './endorsements.html.js';

const ENDORSEMENTS = [{
    name: '314 Action',
    image: '/images/endorsements/color/314action.png',
    link: 'http://www.314action.org/endorsed-candidates-1/'
}, {
    name: 'Freethought Equality Fund',
    image: '/images/endorsements/color/fef.png',
    link: 'http://freethoughtequality.org/2018-endorsements-state-local/'
}, {
    name: 'NARAL Pro-Choice Maryland PAC Endorsed Champion of Choice',
    image: '/images/endorsements/color/naral.png',
    link: 'https://maryland.prochoiceamericaaffiliates.org/wp-content/uploads/sites/11/2018/05/Endorsements.pdf'
}, {
    name: 'Political Revolution',
    image: '/images/endorsements/color/political-revolution.png',
    link: 'https://political-revolution.com/endorsements/'
}, {
    name: 'Run for Something',
    image: '/images/endorsements/color/run-for-something.png',
    link: 'https://runforsomething.net/candidates/derek-kent/'
}];

const RECOGNITIONS = [{
    name: 'Mom\'s Demand Action Gun Sense Candidate',
    image: '/images/endorsements/color/gun-sense.png',
    link: ''
}, {
    name: 'Represent Maryland Small Money Certified',
    image: '/images/endorsements/color/represent.maryland.png',
    link: ''
}, {
    name: 'USSEC Friend of Solar',
    image: '/images/endorsements/color/friend-of-solar.svg',
    link: ''
}, {
    name: '#VoteProChoice Recommended',
    image: '/images/endorsements/color/voteprochoice.png',
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
