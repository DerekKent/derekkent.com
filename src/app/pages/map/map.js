import {Controller} from 'superb';
import {description as template} from './map.html';
import 'maps';

export default class Map extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/map/map.css';
        this.view = {
            tag: 'main',
            classes: ['map-page']
        };
        this.model = {};

        this.events = {
            'submit form': (e) => {
                e.preventDefault();

                let formData = new FormData(e.target);
                let address = null;
                let maps = window.google.maps;

                if (typeof formData.get === 'function') {
                    address = formData.get('address');
                } else {
                    address = e.target.elements[0].value;
                }

                let geocoder = new maps.Geocoder();

                geocoder.geocode({address: address}, (results, status) => {
                    if (status === maps.GeocoderStatus.OK) {
                        let latLong = results[0].geometry.location;

                        this.map.setCenter(latLong);

                        if (this.marker) {
                            this.marker.setMap(null);
                        }

                        this.marker = new maps.Marker({
                            map: this.map,
                            position: latLong
                        });

                        let containsLocation = maps.geometry.poly.containsLocation;

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
        };
    }

    onLoaded() {
        let controller = this;

        function handler(e) {
            if (!document.body.contains(controller.el)) {
                return;
            }

            e.target.removeEventListener(e.type, handler);
            controller.initMap();
        }

        this.el.addEventListener('DOMNodeInserted', handler);
    }

    onRender() {
        this.initMap();
    }

    initMap() {
        let el = document.querySelector('.district32-map');
        let options = {
            zoom: 11,
            center: new window.google.maps.LatLng(39.155, -76.713)
        };
        let map = new window.google.maps.Map(el, options);

        this.map = map;

        map.data.loadGeoJson('/data/district32.geojson');

        map.data.setStyle({
            fillColor: '#292d78',
            strokeColor: '#292d78',
            strokeWeight: 1
        });

        window.google.maps.event.addListenerOnce(map, 'idle', () => {
            let layer = map.data.getFeatureById('district32');
            let gP = layer.getGeometry(); // Polygon geometry object
            let gLG = gP.getArray()[0]; // LinearRing geometry object
            let arPnt = gLG.getArray(); // Points of the LinearRing

            this.district32 = new window.google.maps.Polygon({paths: arPnt});
        });
    }

}
