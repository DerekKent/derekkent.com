import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import analytics from '~/handlers/analytics.js';
import xhr from '~/handlers/xhr.js';
import {description as template} from './petition.html.js';

const ACT_BLUE = 'https://secure.actblue.com/contribute/page/';

export default class Petition extends Controller {

    constructor() {
        super();
        this.setup();
        this.setTitle();
        this.update();
    }

    init() {
        this.template = template;
        this.css = '/app/pages/petitions/petition.css';
        this.view = {
            tag: 'main',
            classes: ['petition', 'page']
        };
        this.model = {
            signed: false,
            zipcode: '(\\d{5}([\\-]\\d{4})?)',
            petition: {
                title: '',
                lead: '',
                blurb: ''
            }
        };
    }

    update() {
        this.model.petition = this.petition || this.model.petition;
        super.update();
    }

    setup() {}

    setTitle() {
        document.title = `${this.petition.title} — Derek Kent`;
    }

    @on('submit form')
    async onPetitionSubmit(e) {
        e.preventDefault();

        const form = e.delegateTarget;
        const data = new FormData(form);

        if (!form.checkValidity()) {
            this.model.error = 'Your zip code and e-mail address are ' +
                'required to sign the petition.';
        } else {
            this.model.error = false;
            this.model.submitting = true;

            try {
                await xhr.post('https://derekkent.com/api/v1/petition', data);
            } catch (err) {
                this.model.error = 'Oops, something went wrong.';
                this.update();

                return;
            } finally {
                this.model.submitting = false;
                this.update();
            }

            this.model.signed = true;
            this.update();
            window.scrollTo(0, 0);

            if (analytics.tracking) {
                SystemJS.import('conversions').then(() => {
                    window.google_trackConversion({
                        'google_conversion_id': 880588424,
                        'google_conversion_label': this.petition.conversionLabel,
                        'google_remarketing_only': false
                    });
                    this.loadThankYou();
                });
            } else {
                this.loadThankYou();
            }
        }

        this.update();
    }

    loadThankYou() {
        document.location.href = `${ACT_BLUE}${this.petition.redirect}`;
    }

}
