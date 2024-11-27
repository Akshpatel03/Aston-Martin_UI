import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { mapStyle } from '@/config/mapConfig';
import { IDealer } from '@/utils/interface/home';
import images from "@/public/images";

interface MapComponentProps {
    dealers: IDealer[] 
    updateSelectedLocation: (id: string) => void
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any;

const MapComponent: React.FC<MapComponentProps> = ({ dealers, updateSelectedLocation = () => {} }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<typeof google.maps | null>(null);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState<number | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, 
      libraries: ['places'], 
    });

    loader.importLibrary('maps').then(() => {
      if (mapRef.current && window.google) {
        const googleMap = new google.maps.Map(mapRef.current, {
          center: { lat: 51.135, lng: -0.169 }, // Set a default center
          zoom: 8,
          styles: mapStyle,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          maxZoom: 16,
        });

        setMap(googleMap);

        const bounds = new google.maps.LatLngBounds();

        dealers.forEach((dealer) => {
          if (dealer.latitude && dealer.longitude) {
            const position = new google.maps.LatLng(dealer.latitude, dealer.longitude);
            bounds.extend(position);
          }
        });
      
        googleMap.fitBounds(bounds);
      }
    }).catch((error) => {
      console.error('Error loading Google Maps API:', error);
    });
  }, [dealers]);

  useEffect(() => {
    if (map && dealers.length > 0) {
        dealers.forEach((location, index) => {
        const isActive = activeMarkerIndex === null || index === activeMarkerIndex;
        const marker = new google.maps.Marker({
          position: { lat: location.latitude!, lng: location.longitude! },
          map: map,
          title: location.id,
          label: {
            text: String.fromCharCode(65 + index),
            fontSize: '16px',
            color: 'white',
            className: 'marker-label'
          },
          icon: {
            url: isActive ? images.MapMarkerIconActive : images.MapMarkerIconInactive,
            scaledSize: new google.maps.Size(25, 41),
          },
          zIndex: 100,
        });
        google.maps.event.addListener(marker, 'click', () => {
          setActiveMarkerIndex(index);
          updateSelectedLocation(marker.title);
        });
      });
    }
  }, [map, dealers, activeMarkerIndex, updateSelectedLocation]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;
