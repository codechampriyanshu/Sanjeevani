import ReactMapGl,{Marker,Popup,GeolocateControl} from 'react-map-gl'
import React,{useEffect, useState} from 'react'
import {MdLocalHospital} from 'react-icons/md'
export default function Test() {
    const [viewport,setViewport]=useState({
        latitude:45.4211,
        longitude:-76.6903,
        zoom:10,
        width:'100vw',
        height:'100vh'
    })
    const [selectedMarker,setSelectedMarker]=useState(null)
    useEffect(()=>{
        const popupCloser=(e)=>{
            if(e.key==="Escape")
                setSelectedMarker(null)
        }
        window.addEventListener("keydown",popupCloser)
        return (()=>{
            window.removeEventListener("keydown",popupCloser)
        }
        )
    },[])
    return (
        <div>
            <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/ashish-verma/ckxd3pza5civv15p5nhyn9hif"
                onViewportChange={viewport=>{
                    setViewport(viewport)
                }}>
                    <GeolocateControl
                        style={{right:10,top:10}}
                        positionOptions={{enableHighAccuracy: false}}
                        trackUserLocation={true}
                        auto
                    />
               <Marker latitude={45.4211} longitude={-76.6903} >            {/* get data dynamically here and then render the markers */}
                   <MdLocalHospital className='text-xl text-red-500 md:text-2xl' onClick={()=>setSelectedMarker("hospital_id")}/>
               </Marker>
               {selectedMarker && <Popup latitude={45.4211} longitude={-76.6903} onClose={()=>setSelectedMarker(null)}>
                   <div className='font-bold text-red-600 bg-white'>Hospital Name..</div>
                   </Popup>}
            </ReactMapGl>
        </div>
    )
}
