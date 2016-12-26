import Petition from '../petition';

export default class LivingWagePetition extends Petition {

    setup() {
        this.petition = {
            redirect: 'fight-for-15?amount=50.00&recurring=1',
            conversionLabel: 'Q1fqCLju52wQiO3yowM',
            title: 'Fight for $15',
            lead: 'Help fight for a real living wage',
            blurb: 'Anyone who works 40 hours or more a week in Maryland should ' +
                'be able to support themselves and their family. It\'s time to fix ' +
                'this moral injustice permanently by raising the minimum wage to ' +
                '$15 an hour and indexing it to the cost of living.',
            blurb2: 'Add your name to the petition to tell Maryland politicians ' +
                'that they need to get behind the fight for $15.'
        };
    }

}
