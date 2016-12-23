import Petition from '../petition';

export default class FrackingPetition extends Petition {

    setup() {
        this.petition = {
            redirect: 'ban-fracking?amount=50.00&recurring=1',
            conversionLabel: 'Gd7ACJr6z2wQiO3yowM',
            title: 'Ban Fracking in Maryland',
            lead: 'Help protect our health, climate and natural resources',
            blurb: 'Fracking has been connected with cardiac and neurological ' +
                'illnesses and premature births, pollutes drinking water, ' +
                'poisons our air, contributes to climate change, and destroys ' +
                'ecosystems.',
            blurb2: 'Add your name to the petition to tell Maryland politicians ' +
                'that you want to protect our health, climate, and natural ' +
                'resources by keeping fracking out of our state.'
        };
    }

}
