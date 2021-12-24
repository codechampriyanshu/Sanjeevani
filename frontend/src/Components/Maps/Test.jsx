import ReactMapGl, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl'
import React, { useEffect, useState } from 'react'
import { MdLocalHospital } from 'react-icons/md'
// import data from './data'
export default function Test() {
    const [viewport, setViewport] = useState({
        latitude: 25.4358,
        longitude: 81.8463,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    let data = [
        {
            name: "H1",
            desc: "Good hospital",
            location: [
                25.5358,
                81.8493
            ]
        },
        {
            name: "H2",
            desc: "Good hospital",
            location: [
                25.2358,
                81.9463
            ]
        },
        {
            name: "H3",
            desc: "Good hospital",
            location: [
                25.4358,
                81.99
            ]
        }
    ]
    const [selectedMarker, setSelectedMarker] = useState(null)
    useEffect(() => {
        const popupCloser = (e) => {
            if (e.key === "Escape")
                setSelectedMarker(null)
        }
        window.addEventListener("keydown", popupCloser)
        return (() => {
            window.removeEventListener("keydown", popupCloser)
        }
        )
    }, [])
    return (
        <div>
            <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} className='w-screen h-screen'
                mapStyle="mapbox://styles/ashish-verma/ckxd3pza5civv15p5nhyn9hif"
                doubleClickZoom={true} touchZoom={true} touchRotate={true}
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}>
                <NavigationControl className='top-4 left-4'></NavigationControl>
                <GeolocateControl
                    style={{ right: 10, top: 10 }}
                    locationOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto
                />

                {data.map((item) => (
                    <Marker latitude={item.location[0]} longitude={item.location[1]} >            {/* get data dynamically here and then render the markers */}
                        <MdLocalHospital className='text-xl text-red-500 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}
                {selectedMarker && <Popup latitude={selectedMarker.location[0]} longitude={selectedMarker.location[1]} onClose={() => setSelectedMarker(null)}>
                    <div className='text-red-500'>{selectedMarker.name}</div>
                    <div className='font-bold text-green-600 bg-white'>{selectedMarker.desc}</div>
                </Popup>}
                <FullscreenControl className='top-32 left-4'></FullscreenControl>
                <ScaleControl className='bottom-4 right-4'></ScaleControl>
            </ReactMapGl>
        </div>
    )
}
