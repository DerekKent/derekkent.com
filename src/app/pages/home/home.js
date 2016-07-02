import {Controller} from 'superb';
import {description as template} from './home.html';

export default class Home extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/home/home.css';
        this.view = {
            tag: 'main',
            classes: ['home-page', 'page']
        };

        this.model = {
            subscribed: false,
            amt: 10
        };

        this.events = {
            'submit .subscribe': (e) => {
                e.preventDefault();

                this.model.subscribed = true;
                this.update();
            },

            'click .input-wrapper input': (e) => {
                const input = e.target;

                this.model.amt = +input.getAttribute('value');
                this.update();
            }
        };
    }

}
