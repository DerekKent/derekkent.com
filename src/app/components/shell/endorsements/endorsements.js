import {Controller} from 'superb';
import template from './endorsements.html.js';

const POPSTATE_EVENT_LISTENER = Symbol();

class Endorsements extends Controller {

    init() {
        this.template = template;
        this.css = '/app/components/shell/endorsements/endorsements.css';
        this.view = {
            classes: ['page-endorsements']
        };

        this.model = this.shuffle([{
            name: '314 Action',
            image: '/images/endorsements/314action.png',
            link: 'http://www.314action.org/endorsed-candidates/'
        }, {
            name: 'Run for Something',
            image: '/images/endorsements/run-for-something.png',
            link: 'https://runforsomething.net/candidates/derek-kent/'
        }, {
            name: 'Political Revolution',
            image: '/images/endorsements/political-revolution.png',
            link: 'https://political-revolution.com/endorsements/'
        }, {
            name: 'Freethought Equality Fund',
            image: '/images/endorsements/fef.png',
            link: 'http://freethoughtequality.org/2018-endorsements-state-local/'
        }]);

        this[POPSTATE_EVENT_LISTENER] = () => {
            this.shuffle(this.model);

            window.requestAnimationFrame(() => {
                this.update();
            });
        };

        window.addEventListener('popstate', this[POPSTATE_EVENT_LISTENER]);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    onClose() {
        window.removeEventListener('popstate', this[POPSTATE_EVENT_LISTENER]);
    }

}

const endorsements = new Endorsements();

export default endorsements;
