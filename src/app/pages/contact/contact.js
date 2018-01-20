import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import xhr from '~/handlers/xhr.js';
import template from './contact.html.js';

export default class Contact extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/contact/contact.css';
        this.view = {
            tag: 'main',
            classes: ['contact-page', 'page']
        };
        this.model = {};
    }

    onLoaded() {
        document.title = 'Contact — Derek Kent';
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
            this.model.error = 'Please enter your e-mail address, a subject, ' +
                'and a brief message.';
        } else {
            this.model.error = false;
            this.model.submitting = true;

            try {
                await xhr.post('https://derekkent.com/api/v1/contact', data);
            } catch (err) {
                this.model.error = `Oops, something went wrong: ${err.responseText}`;

                return;
            } finally {
                this.model.submitting = false;
                this.update();
            }

            this.model.submitted = true;
            this.update();
            window.scrollTo(0, 0);
        }

        this.update();
    }

}
