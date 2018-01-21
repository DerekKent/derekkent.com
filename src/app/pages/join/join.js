import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import {track} from '~/helpers/conversions.js';
import xhr from '~/handlers/xhr.js';
import template from './join.html.js';

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

    onLoaded() {
        document.title = 'Get Involved — Derek Kent';
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
    async onSubscribeSubmit(e) {
        e.preventDefault();

        if (this.model.submitting) {
            return;
        }

        const form = e.delegateTarget;
        const data = new FormData(form);

        if (!form.checkValidity()) {
            this.model.error = 'Please enter your zip code and e-mail address, ' +
                'and volunteer for one or more activities.';
        } else {
            this.model.error = false;
            this.model.submitting = true;

            try {
                await xhr.post('https://derekkent.com/api/v1/join', data);
            } catch (err) {
                this.model.error = `Oops, something went wrong: ${err.responseText}`;

                return;
            } finally {
                this.model.submitting = false;
                this.update();
            }

            this.model.joined = true;
            this.update();
            window.scrollTo(0, 0);

            track('QCOtCMT0vGwQiO3yowM');
        }

        this.update();
    }

}
