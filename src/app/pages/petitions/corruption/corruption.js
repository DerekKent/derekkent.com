import Petition from '../petition.js';

export default class CorruptionPetition extends Petition {

    setup() {
        this.petition = {
            redirect: 'maryland-money?amount=50.00&recurring=1',
            conversionLabel: 'VYivCPrYrW0QiO3yowM',
            title: 'Get Big Money Out of Politics',
            slug: 'money-in-politics',
            lead: 'End the corrupting influence money has on our political system',
            blurb: 'Campaigns should be reliant on building broad support among their constituents, ' +
                'not on building narrow support among a small group of wealthy donors. ' +
                'Yet, at $6000, the maximum individual donation limit in Maryland is among the ' +
                'highest in the nation, inviting corruption.',
            blurb2: 'Add your name to the petition to tell Maryland politicians ' +
                'that you want to lower the maximum individual donation limit and ' +
                'ban all corporate donations.'
        };
    }

}
