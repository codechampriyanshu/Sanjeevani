import ReactMapGl, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl'
import React, { useEffect, useState } from 'react'
import { MdLocalHospital,MdMedicalServices } from 'react-icons/md'
import {FaClinicMedical} from 'react-icons/fa'
import {getClinics, getHospitals} from './data'
export default function Test() {
    const [viewport, setViewport] = useState({
        latitude: 25.4358,
        longitude: 81.8463,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    const [loading,setLoading]=useState(true)
    const [hospitals,setHospitals]=useState(null)
    const [clinics,setClinics]=useState(null)
    const [selectedMarker, setSelectedMarker] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
            setHospitals([
                ...getHospitals(position.coords.latitude,position.coords.longitude)
            ])
            setClinics([...getClinics(position.coords.latitude,position.coords.longitude)])
        })
        const popupCloser = (e) => {
            if (e.key === "Escape")
                setSelectedMarker(null)
        }
        window.addEventListener("keydown", popupCloser)
        setLoading(false)
        return (() => {
            window.removeEventListener("keydown", popupCloser)
        }
        )
    }, [])
    return (
        <div>

            {loading ?<div className='grid w-screen h-screen text-2xl text-green-500 place-items-center'>Loading...</div> : 
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

                {hospitals && hospitals.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <MdMedicalServices className='text-xl text-red-500 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {clinics && clinics.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <FaClinicMedical className='text-xl text-red-500 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {selectedMarker && <Popup className="bg-gray-200" latitude={selectedMarker.position.latitude} longitude={selectedMarker.position.longitude} onClose={() => setSelectedMarker(null)}>
                    <div className='text-red-400'>{selectedMarker.name}</div>
                    <div className='text-green-500'>{selectedMarker.desc}</div>
                </Popup>}
                <FullscreenControl className='top-32 left-4'></FullscreenControl>
                <ScaleControl className='bottom-4 right-4'></ScaleControl>
            </ReactMapGl>}
        </div>
    )
}
