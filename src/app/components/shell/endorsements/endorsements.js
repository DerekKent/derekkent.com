import {Controller} from 'superb';
import template from './endorsements.html.js';

const ENDORSEMENTS = [{
    name: '314 Action',
    image: '/images/endorsements/white/314action.png',
    link: 'http://www.314action.org/endorsed-candidates-1/'
}, {
    name: 'Freethought Equality Fund',
    image: '/images/endorsements/white/fef.png',
    link: 'http://freethoughtequality.org/2018-endorsements-state-local/'
}, {
    name: 'NARAL Pro-Choice Maryland PAC Endorsed Champion of Choice',
    image: '/images/endorsements/white/naral.png',
    link: 'https://maryland.prochoiceamericaaffiliates.org/wp-content/uploads/sites/11/2018/05/Endorsements.pdf'
}, {
    name: 'Political Revolution',
    image: '/images/endorsements/white/political-revolution.png',
    link: 'https://political-revolution.com/endorsements/'
}, {
    name: 'Run for Something',
    image: '/images/endorsements/white/run-for-something.png',
    link: 'https://runforsomething.net/candidates/derek-kent/'
}];

class Endorsements extends Controller {

    init() {
        this.template = template;
        this.css = '/app/components/shell/endorsements/endorsements.css';
        this.view = {
            classes: ['page-endorsements']
        };

        this.shuffleEndorsements();

        window.addEventListener('route:loaded', () => {
            if (location.pathname === '/endorsements') {
                this.el.classList.add('hidden');
            } else {
                this.el.classList.remove('hidden');
            }

            this.shuffleEndorsements();
            this.update();
        });
    }

    shuffleEndorsements() {
        this.model = this.shuffle(ENDORSEMENTS);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }

        return array.slice(0, 4);
    }

}

const endorsements = new Endorsements();

export default endorsements;
