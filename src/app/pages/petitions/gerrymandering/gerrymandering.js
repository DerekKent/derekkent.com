import Petition from '../petition';

export default class GerrymanderingPetition extends Petition {

    setup() {
        this.petition = {
            redirect: 'end_gerrymandering?amount=50.00&recurring=1',
            conversionLabel: '_-uXCMW_52wQiO3yowM',
            title: 'End Gerrymandering in Maryland',
            slug: 'end-gerrymandering',
            lead: 'Help keep communities together',
            blurb: 'Maryland has the most egregious gerrymandering in the ' +
                'nation. It\'s time to end the embarrassment by taking redistricting ' +
                ' away from politicians and giving it to a non-partisan organization.',
            blurb2: 'Add your name to the petition to tell Maryland politicians ' +
                'that voters should pick their politicians; politicians shouldn\'t ' +
                'pick their voters.'
        };
    }

}
