import React, { useState } from 'react'

import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
    ZoomControl
} from "react-leaflet"

import {
    Icon,
    LatLngLiteral,
} from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import "leaflet-defaulticon-compatibility"
import { Button } from '@/components/ui/button'

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain"

type MapLocations = LatLngLiteral & {id: string}

type MapProps = {
    center: LatLngLiteral
    locations: MapLocations[]
}

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
    const map = useMap ()
    map.panTo (center, {animate: true})
    return null
}

export const LoanLinkMap:React.FC<MapProps> = ({ center, locations }) => {
    const [mapType, setMapType] = useState<MapType> ("roadmap")
    const [selectedLocations, setSelectedLocations] = useState<MapLocations | undefined> ()

    const getUrl = () => {
        const mapTypeUrls: Record<MapType, string> = {
            roadmap: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
            satellite: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
            hybrid: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
            terrain: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
        }
        return mapTypeUrls[mapType]
    }
    const mapMarkIcon = new Icon ({
        iconUrl: "/assets/image/pin.png",
        iconSize: [47, 55]
    })

    const activeMapMarIcon = new Icon ({
        iconUrl: "/assets/image/map_pin_a.webp",
        iconSize: [57, 65]
    })

    const renderMarks = () => {
        return locations.map ((location) => (
            <div key={location.id}>
                <Marker
                    icon={location.id === selectedLocations?.id ? activeMapMarIcon : mapMarkIcon}
                    position={{lat: location.lat, lng: location.lng}}
                    eventHandlers={{click: () => {
                        setSelectedLocations (location)
                    }}}
                />
            </div>
        ))
    }

    return (
        <div className='h-full w-full rounded-md overflow-hidden relative'>
            <MapContainer
                center={center}
                zoom={13}
                minZoom={5}
                zoomControl={false}
                attributionControl={false}
                style={{width: '100%', height: "100%"}}
            >
                <TileLayer url={getUrl ()} />
                {selectedLocations && <SelectedLocation center={selectedLocations} />}
                {renderMarks ()}
                <ZoomControl position='topright' />
            </MapContainer>
            <div className='absolute bottom-3 z-[34449950] px-5 flex mt-4 gap-4'>
                <Button className='bg-orange-400/80 hover:bg-orange-600 font-semibold' onClick={() => setMapType ("roadmap")}>Roadmap</Button>
                <Button className='bg-orange-400/80 hover:bg-orange-600 font-semibold' onClick={() => setMapType ("satellite")}>Satellite</Button>
                <Button className='bg-orange-400/80 hover:bg-orange-600 font-semibold' onClick={() => setMapType ("hybrid")}>Hybrid</Button>
                <Button className='bg-orange-400/80 hover:bg-orange-600 font-semibold' onClick={() => setMapType ("terrain")}>Terrain</Button>
            </div>
        </div>
    )
}