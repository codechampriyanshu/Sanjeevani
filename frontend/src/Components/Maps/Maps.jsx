import ReactMapGl, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl'
import React, { useEffect, useState } from 'react'
import {MdMedicalServices } from 'react-icons/md'
import {FaClinicMedical,FaMicroscope,FaAmbulance} from 'react-icons/fa'
import {getAmbulance, getClinics, getHospitals,getPathology} from './data'
import { useParams,Link } from 'react-router-dom'
export default function Test() {
    const params=useParams()
    const [viewport, setViewport] = useState({
        latitude: 25.4358,
        longitude: 81.8463,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    const [loading,setLoading]=useState(true)
    const [show,setShow]=useState("clinics")
    const [hospitals,setHospitals]=useState(null)
    const [clinics,setClinics]=useState(null)
    const [pathology,setPathology]=useState(null)
    const [ambulance,setAmbulance]=useState(null)
    const [selectedMarker, setSelectedMarker] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
            setHospitals([...getHospitals(position.coords.latitude,position.coords.longitude)])
            setClinics([...getClinics(position.coords.latitude,position.coords.longitude)])
            setPathology([...getPathology(position.coords.latitude,position.coords.longitude)])
            setAmbulance([...getAmbulance(position.coords.latitude,position.coords.longitude)])
        })
        const popupCloser = (e) => {
            if (e.key === "Escape")
                setSelectedMarker(null)
        }
        setShow(params.id)
        window.addEventListener("keydown", popupCloser)
        setLoading(false)
        return (() => {
            window.removeEventListener("keydown", popupCloser)
        }
        )
    }, [])
    return (
        <div>
            <div className='absolute z-50 text-xl text-gray-900 bg-gray-100 bottom-1 left-1'>Nearby {show}</div>
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

                {show==="hospitals" && hospitals && hospitals.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <MdMedicalServices className='text-xl text-red-500 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {show==="clinics" && clinics && clinics.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <FaClinicMedical className='text-xl text-red-500 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {show==="labs" && pathology && pathology.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <FaMicroscope className='text-xl text-red-400 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {show==="ambulances" && ambulance && ambulance.map((item) => (
                    <Marker latitude={item.position.latitude} longitude={item.position.longitude} >            {/* get data dynamically here and then render the markers */}
                        <FaAmbulance className='text-xl text-red-400 md:text-2xl' onClick={() => setSelectedMarker(item)} />
                    </Marker>
                ))}

                {selectedMarker && <Popup className="bg-gray-200" latitude={selectedMarker.position.latitude} longitude={selectedMarker.position.longitude} onClose={() => setSelectedMarker(null)}>
                    <div className='text-red-400'>{selectedMarker.name}</div>
                    <div className='text-green-500'>{selectedMarker.desc}</div>
                    <div className='text-blue-500'>Phone:{selectedMarker.phone}</div>
                    <Link className='block p-2 m-2 font-semibold text-white bg-green-400 rounded-lg' to={`/patient/appointment/new/${selectedMarker.id}`}>Take appointment..</Link>
                </Popup>}
                <FullscreenControl className='top-32 left-4'></FullscreenControl>
                <ScaleControl className='bottom-4 right-4'></ScaleControl>
            </ReactMapGl>}
        </div>
    )
}
