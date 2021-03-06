import Petition from '../petition.js';

export default class HB1167Petition extends Petition {

    setup() {
        this.petition = {
            redirect: 'derekkent?refcode=hb1167&amount=50.00&recurring=1',
            conversionLabel: '7zF1CK3rjm8QiO3yowM',
            title: 'Protect the Right to Choose',
            slug: 'hb1167',
            lead: 'Tell the District 32 Delegates to end their support of HB1167',
            blurb: 'HB1167 passage would represent a catastrophe for women\'s health ' +
                'care in Maryland. The bill would effectively ban most abortions — ' +
                'even in cases of rape and incest — at a time when women\'s health ' +
                'is also under attack from Congressional Republicans. ',
            blurb2: 'Mark Chang, and Ted Sophocleus — two of only three Democrats ' +
                'in the entire state to support this disastrous legislation — ' +
                'should withdraw their support of it immediately.'
        };
    }

}
