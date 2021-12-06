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
    dots: false,
    fade:true,
    infinite: true,
    autoplaySpeed: 4000,
    speed:500,
    pauseOnHover:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: '50px' // set center padding
  };

export default function Testimonials() {
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
        <div>
        <span className="block pt-10 text-center text-blue-800 md:text-3xl md:font-bold md:mt-6">What people have to say....</span>
        <div className="relative w-2/5 mx-auto">
        <button onClick={goPrev}><img src="/images/left-arrow.png" alt="" className="absolute z-20 w-6 h-6 rounded-full md:h-8 md:w-8 opacity-30 left-2 top-1/3"/></button>
            <Slider ref={sliderRef} {...settings} className="w-full m-0">
                {images.map((x, i) => {
                    return <div key={i} className="h-60 img-card bnine:h-80">
                    <img className="object-cover w-1/3 mx-auto mt-3 rounded-full h-36 ring-white ring" src={x.img} alt=""/>
                    <div className="card-body">
                        <div className="mb-2 text-base font-semibold md:text-lg lg:text-xl">{x.title}</div>
                        <div className="hidden text-sm sm:block bnine:mt-3 md:text-base">{x.text}</div>
                    </div>
                    </div>
                })}
                </Slider>
                <button onClick={goNext}><img src="/images/right-arrow.png" alt="" className="absolute z-20 w-6 h-6 border rounded-full md:h-8 md:w-8 opacity-30 right-2 top-1/3"/></button>
        </div>
        </div>
    )
}
