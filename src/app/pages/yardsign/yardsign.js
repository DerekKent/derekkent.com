import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import {track} from '~/helpers/conversions.js';
import xhr from '~/handlers/xhr.js';
import template from './yardsign.html.js';

const zipcodes = [
    '20701',
    '20724',
    '20755',
    '20794',
    '21061',
    '21076',
    '21077',
    '21090',
    '21108',
    '21113',
    '21144',
    '21225',
    '21240'
];

export default class YardSign extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/yardsign/yardsign.css';
        this.view = {
            tag: 'main',
            classes: ['yardsign-page', 'page']
        };
        this.model = {
            requested: false,
            zipcode: '(\\d{5}([\\-]\\d{4})?)'
        };
    }

    onLoaded() {
        document.title = 'Order a Yard Sign — Derek Kent';
    }

    @on('change form')
    checkFormValidity(e) {
        const form = e.delegateTarget;
        const zipEl = form.querySelector('[name="zip"]');

        if (!zipcodes.includes(zipEl.value.substr(0, 5))) {
            zipEl.setCustomValidity('Sorry, free yard signs are only available to District 32 residents');
        } else {
            zipEl.setCustomValidity('');
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
            this.model.error = 'Please enter a District 32 zip code and street address.';
        } else {
            this.model.error = false;
            this.model.submitting = true;

            try {
                await xhr.post('https://derekkent.com/api/v1/yardsign', data);
            } catch (err) {
                this.model.error = `Oops, something went wrong: ${err.responseText}`;
                this.model.requested = true;

                return;
            } finally {
                this.model.submitting = false;
                this.update();
            }

            this.model.requested = true;
            this.update();
            window.scrollTo(0, 0);

            track('DQMvCNq9w4EBEIjt8qMD');
        }

        this.update();
    }

}
