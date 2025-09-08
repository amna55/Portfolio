import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1uYXNhYWQiLCJhIjoiY21mNGR2ZmllMDAzODJtczl1NjNvbmJpNyJ9.sMlHrDIjJ4iDbYEJaBqWNQ';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [selectedLake, setSelectedLake] = useState(null);

    useEffect(() => {
        if (map.current) return; // prevent re-initialization

        // Berlin bounding box (SW + NE corners)
        const berlinBounds = [
            [13.08835, 52.33826], // Southwest
            [13.76116, 52.67551]  // Northeast
        ];

        // Create map instance
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [13.4050, 52.5200], // Berlin center
            zoom: 10,
            pitch: 45,
            maxBounds: berlinBounds // restricts dragging outside Berlin
        });

        // Add zoom/rotation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Zoom & fit map to Berlin bounding box
        map.current.fitBounds(berlinBounds, { padding: 20 });

        // Load data & add layers once map is ready
        map.current.on('load', () => {
            const lakesData = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: { name: 'Wannsee', crowdedness: 85, area: 2.7, popularity: 'High' },
                        geometry: { type: 'Point', coordinates: [13.1445, 52.4192] }
                    },
                    {
                        type: 'Feature',
                        properties: { name: 'Müggelsee', crowdedness: 70, area: 7.4, popularity: 'Medium' },
                        geometry: { type: 'Point', coordinates: [13.6417, 52.4333] }
                    },
                    {
                        type: 'Feature',
                        properties: { name: 'Schlachtensee', crowdedness: 90, area: 0.4, popularity: 'High' },
                        geometry: { type: 'Point', coordinates: [13.2158, 52.4419] }
                    }
                ]
            };

            // Add GeoJSON source
            map.current.addSource('lakes', { type: 'geojson', data: lakesData });

            // Add layer with circle visualization
            map.current.addLayer({
                id: 'lakes-layer',
                type: 'circle',
                source: 'lakes',
                paint: {
                    'circle-radius': [
                        'interpolate', ['linear'], ['get', 'crowdedness'],
                        0, 5,
                        100, 25
                    ],
                    'circle-color': [
                        'interpolate', ['linear'], ['get', 'crowdedness'],
                        0, '#00ff00',
                        50, '#ffff00',
                        100, '#ff0000'
                    ],
                    'circle-opacity': 0.8,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });

            // Handle clicks on lakes
            map.current.on('click', 'lakes-layer', (e) => {
                const features = map.current.queryRenderedFeatures(e.point, { layers: ['lakes-layer'] });
                if (features.length > 0) {
                    setSelectedLake(features[0].properties);
                }
            });

            // Change cursor on hover
            map.current.on('mouseenter', 'lakes-layer', () => {
                map.current.getCanvas().style.cursor = 'pointer';
            });
            map.current.on('mouseleave', 'lakes-layer', () => {
                map.current.getCanvas().style.cursor = '';
            });
        });
    }, []);


    return (
        <section id="Map" className="map-section">
            <h2>Berlin Lakes Density</h2>
            <p>Explore crowdedness levels of Berlin's popular lakes</p>

            <div className="map-wrapper">
                <div ref={mapContainer} className="map" />

                {selectedLake && (
                    <div className="lake-info">
                        <h3>{selectedLake.name}</h3>
                        <p>Crowdedness: {selectedLake.crowdedness}%</p>
                        <p>Area: {selectedLake.area} km²</p>
                        <p>Popularity: {selectedLake.popularity}</p>
                    </div>
                )}

                <div className="map-legend">
                    <h4>Crowdedness Legend</h4>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#00ff00' }}></span>
                        <span>Empty (0-30%)</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#ffff00' }}></span>
                        <span>Medium (31-70%)</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#ff0000' }}></span>
                        <span>Crowded (71-100%)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
