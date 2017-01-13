import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators';
import analytics from '~/handlers/analytics';
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

                if (analytics.tracking) {
                    SystemJS.import('conversions').then(() => {
                        window.google_trackConversion({
                            'google_conversion_id': 880588424,
                            'google_conversion_label': 'QCOtCMT0vGwQiO3yowM',
                            'google_remarketing_only': false
                        });
                    });
                }
            }).catch(() => {
                this.model.submitting = false;
                this.model.error = 'Oops, something went wrong.';
                this.update();
            });
        }

        this.update();
    }

}
