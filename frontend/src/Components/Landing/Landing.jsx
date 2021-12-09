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

export default function Landing() {
   const [settings,setSettings]=useState(config)
   useEffect(()=>{
     const handleResize=()=>{
       const size=window.innerWidth
       if(size<300){
         setSettings({...settings,slidesToShow:1,centerMode:false})
       }
       else if(size<=480){
         setSettings({...settings,slidesToShow:1,centerMode:true})
       }else if(size<=800){
        setSettings({...settings,slidesToShow:2,centerMode:true})
       }else if(size<=1200){
        setSettings({...settings,slidesToShow:3,centerMode:true})
       }else{
        setSettings({...settings,slidesToShow:4,centerMode:true})
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
        <div className="relative w-full mt-12 overflow-hidden" id="Home">
        <button onClick={goPrev}><img src="/images/left-arrow.png" alt="" className="absolute z-20 w-6 h-6 bg-gray-100 rounded-full select-none md:h-8 md:w-8 opacity-30 left-2 top-1/3"/></button>
            <Slider ref={sliderRef} {...settings} className="w-full m-0">
                {images.map((x, i) => {
                    return <div key={i} className="h-60 img-card bnine:h-80">
                    <img className="object-cover w-full h-48" src={x.img} alt=""/>
                    <div className="card-body">
                        <div className="mb-2 text-base font-semibold md:text-lg lg:text-xl">{x.title}</div>
                        <div className="hidden text-sm bnine:mt-3 bnine:block md:text-base">{x.text}</div>
                    </div>
                    </div>
                })}
                </Slider>
                <button onClick={goNext}><img src="/images/right-arrow.png" alt="" className="absolute z-20 w-6 h-6 bg-gray-100 border rounded-full select-none md:h-8 md:w-8 opacity-30 right-2 top-1/3"/></button>
        </div>
    )
}
