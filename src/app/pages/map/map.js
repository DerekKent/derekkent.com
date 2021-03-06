import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import template from './map.html.js';
import 'maps';

export default class Map extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/map/map.css';
        this.view = {
            tag: 'main',
            classes: ['map-page', 'page']
        };
        this.model = {};
    }

    onLoaded() {
        document.title = 'District 32 Locator — Derek Kent';

        const controller = this;

        function handler(e) {
            if (!document.body.contains(controller.el)) {
                return;
            }

            e.target.removeEventListener(e.type, handler);
            controller.initMap();
        }

        this.el.addEventListener('DOMNodeInserted', handler);
    }

    initMap() {
        const el = document.querySelector('.district32-map');
        const options = {
            zoom: 11,
            center: new window.google.maps.LatLng(39.155, -76.713)
        };
        const map = new window.google.maps.Map(el, options);

        this.map = map;

        map.data.loadGeoJson('/data/district32.geojson');

        map.data.setStyle({
            fillColor: '#292d78',
            strokeColor: '#292d78',
            strokeWeight: 1
        });

        window.google.maps.event.addListenerOnce(map, 'idle', () => {
            const layer = map.data.getFeatureById('district32');
            const gP = layer.getGeometry(); // Polygon geometry object
            const gLG = gP.getArray()[0]; // LinearRing geometry object
            const arPnt = gLG.getArray(); // Points of the LinearRing

            this.district32 = new window.google.maps.Polygon({paths: arPnt});
        });
    }

    @on('submit form')
    onAddressLookup(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        let address = null;
        const maps = window.google.maps;

        if (typeof formData.get === 'function') {
            address = formData.get('address');
        } else {
            address = e.target.elements[0].value;
        }

        const geocoder = new maps.Geocoder();

        geocoder.geocode({address}, (results, status) => {
            if (status === maps.GeocoderStatus.OK) {
                const latLong = results[0].geometry.location;

                this.map.setCenter(latLong);

                if (this.marker) {
                    this.marker.setMap(null);
                }

                this.marker = new maps.Marker({
                    map: this.map,
                    position: latLong
                });

                const containsLocation = maps.geometry.poly.containsLocation;

                if (containsLocation(latLong, this.district32)) {
                    this.model = {resident: true};
                } else {
                    this.model = {resident: false};
                }
            } else {
                this.model = {error: status};
            }

            this.update();
        });
    }

}
