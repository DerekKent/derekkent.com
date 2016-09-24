import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators';
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
    }

    @on('submit .subscribe')
    onSubscribeSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.delegateTarget);

        fetch('/api/v1/subscribe', {
            method: 'PUT',
            body: data
        });

        this.model.subscribed = true;
        this.update();
    }

    @on('click .donation-wrapper input')
    @on('focus .donation-wrapper input')
    @on('keydown .donation-wrapper input')
    onToggleDonationValue(e) {
        const input = e.delegateTarget;

        this.model.amt = Number(input.getAttribute('value'));
        this.model.other = input.type === 'number';
        this.update();
    }

}
