import React, { useEffect, useRef,useState } from 'react'
import Slider from "react-slick";
import "./slick.css"
import images from './Data'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    arrows:false,
    autoplay:true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed:500,
    pauseOnHover:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: '50px' // set center padding
  };

export default function Slick() {
   const [settings,setSettings]=useState(config)
   const [mobile,setMobile]=useState(false)
   useEffect(()=>{
     const handleResize=()=>{
       const size=window.innerWidth
       if(size<300){
         setSettings({...settings,slidesToShow:1,centerMode:false})
         setMobile(true)
       }
       else if(size<=480){
         setSettings({...settings,slidesToShow:1,centerMode:true})
         setMobile(true)
       }else if(size<=800){
        setSettings({...settings,slidesToShow:2,centerMode:true})
        setMobile(true)
       }else if(size<=1200){
        setSettings({...settings,slidesToShow:3,centerMode:true})
        setMobile(false)
       }else{
        setSettings({...settings,slidesToShow:4,centerMode:true})
        setMobile(false)
       }
     }
     window.addEventListener("resize",handleResize)
     handleResize()
     return ()=>{
       window.removeEventListener("resize",handleResize)
     }
   },[])

    const sliderRef=useRef()
    const goNext=()=>{
        sliderRef.current.slickNext()
    }
    const goPrev=()=>{
        sliderRef.current.slickPrev()
    }
    return (
        <div className="relative">
        <button onClick={goPrev}><img src="/images/left-arrow.png" alt="" className="absolute z-20 w-6 h-6 bg-gray-100 rounded-full md:h-8 md:w-8 opacity-30 left-2 top-1/3"/></button>
            <Slider ref={sliderRef} {...settings} className="w-full m-0">
                {images.map((x, i) => {
                    return <div key={i} className={mobile?"h-60 img-card":"h-80 img-card"}>
                    <img className="object-cover w-full h-48" src={x.img} alt=""/>
                    <div className="card-body">
                        <div className="mb-2 text-base font-semibold md:text-lg lg:text-xl">{x.title}</div>
                        <div className={(mobile?`hidden`:`mt-3`)+"text-sm md:text-base"}>{x.text}</div>
                    </div>
                    </div>
                })}
                </Slider>
                <button onClick={goNext}><img src="/images/right-arrow.png" alt="" className="absolute z-20 w-6 h-6 bg-gray-100 border rounded-full md:h-8 md:w-8 opacity-30 right-2 top-1/3"/></button>
        </div>
    )
}
