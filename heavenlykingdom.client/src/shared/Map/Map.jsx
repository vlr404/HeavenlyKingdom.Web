import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';


const circleIcon = L.divIcon({
    className: 'custom-circle-icon', // Новый класс для стилей
    html: '<div class="outer-circle"><div class="inner-circle"></div></div>',
 });

export const Map = ({ adress, cords, contacts, emale }) => {

    if (!cords || !Array.isArray(cords) || cords.length !== 2) {
        return <div className="map-loading">Загрузка координат...</div>;
    }

    return (
        <div className="map-wrapper" style={{ height: '450px', width: '1000px' }}>
            <MapContainer 
                center={cords} 
                zoom={15}
                style={{ height: '100%', width: '100%' }}
                attributionControl={false}
                interactive={true}
                scrollWheelZoom={false}
            >
                <TileLayer 
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" 
                />
                
                <Marker position={cords} icon={circleIcon}>
                    <Tooltip 
                        permanent 
                        direction="bottom" 
                        offset={[-1, 7]}
                        className="orange-tooltip"
                    >
                        <div className="tooltip-inner-content">
                            <div className="white-icon">🏠 {adress}</div>
                            <div className="white-icon">📞 {contacts}</div>
                            <div className="white-icon">✉️ {emale}</div>
                            <div className="route-link">
                                <a 
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${cords[0]},${cords[1]}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <span className="white-icon">📍 </span> ПРОЛОЖИТЬ МАРШРУТ
                                </a>
                            </div>
                        </div>
                    </Tooltip>
                    </Marker>
                    <Marker position={cords} icon={circleIcon}>
                    <Tooltip 
                        permanent 
                        direction="top" 
                        offset={[0, 0]} 
                        className="map-label-text"
                    >
                        Собор Рождества Христова
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    );
};