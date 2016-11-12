import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators';
import {description as template} from './join.html';

export default class Join extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/join/join.css';
        this.view = {
            tag: 'main',
            classes: ['join-page', 'page']
        };
        this.model = {
            joined: false
        };
    }

    @on('submit form')
    onSubscribeSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.delegateTarget);

        fetch('https://derekkent.com/api/v1/join', {
            method: 'POST',
            body: data
        }).then(() => {
            this.model.submitting = false;
            this.model.joined = true;
            this.update();
            window.scrollTo(0, 0);
        });

        this.model.submitting = true;
        this.update();
    }

}
