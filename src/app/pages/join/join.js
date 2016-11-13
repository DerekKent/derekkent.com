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
            joined: false,
            zipcode: '(\\d{5}([\\-]\\d{4})?)'
        };
    }

    @on('change form')
    checkFormValidity(e) {
        const form = e.delegateTarget;
        const checkboxes = form.querySelectorAll('[type="checkbox"]');
        const checked = Array.from(checkboxes).find((checkbox) => {
            return checkbox.checked;
        });

        if (!checked) {
            checkboxes[0].setCustomValidity('Don\'t forget to volunteer!');
        } else {
            checkboxes[0].setCustomValidity('');
        }
    }

    @on('submit form')
    onSubscribeSubmit(e) {
        e.preventDefault();

        const form = e.delegateTarget;
        const data = new FormData(form);

        if (!form.checkValidity()) {
            this.model.error = 'Please enter your zip code and e-mail address, ' +
                'and volunteer for one or more activities.';
        } else {
            this.model.error = false;
            this.model.submitting = true;

            fetch('https://derekkent.com/api/v1/join', {
                method: 'POST',
                body: data
            }).then(() => {
                this.model.submitting = false;
                this.model.joined = true;
                this.update();
                window.scrollTo(0, 0);
            }).catch(() => {
                this.model.submitting = false;
                this.model.error = 'Oops, something went wrong.';
                this.update();
            });
        }

        this.update();
    }

}
