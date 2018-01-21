import analytics from '~/handlers/analytics.js';

export async function track(label) {
    if (!analytics.tracking) {
        return;
    }

    await SystemJS.import('conversions');

    window.google_trackConversion({
        'google_conversion_id': 880588424,
        'google_conversion_label': label,
        'google_remarketing_only': false
    });
}
