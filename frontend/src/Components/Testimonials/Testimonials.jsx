import React, { useRef } from 'react'
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
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: '50px' // set center padding
  };

export default function Testimonials() {

    const sliderRef=useRef()
    const goNext=()=>{
        sliderRef.current.slickNext()
    }
    const goPrev=()=>{
        sliderRef.current.slickPrev()
    }
    return (
        <div className="overflow-hidden md:mb-8" id="Testimonials">
        <span className="block pt-10 text-center text-blue-800 select-none md:text-3xl md:font-bold md:mt-6">What people say....</span>
        <div className="relative w-full mx-auto md:w-2/3 xl:w-1/2">
        <button onClick={goPrev}><img src="/images/left-arrow.png" alt="" className="absolute z-20 w-6 h-6 rounded-full select-none md:h-8 md:w-8 opacity-30 left-2 top-1/3"/></button>
            <Slider ref={sliderRef} {...config} className="w-full mx-auto">
                {images.map((x, i) => {
                    return <div key={i} className="h-48 xs:h-60 sm:h-64 md:h-72 img-card bnine:h-80">
                    <img className="object-cover w-1/4 mx-auto mt-3 mb-2 rounded-full lg:mb-7 sm:mb-4 h-1/3 lg:w-1/5 md:h-2/5 md:w-1/4 sm:w-1/5 xs:w-1/4 xs:h-2/5 ring-white ring" src={x.img} alt=""/>
                    <div className="card-body">
                        <div className="mb-2 text-sm font-semibold xs:text-base sm:text-lg md:text-xl xl:text-xl">{x.title}</div>
                        <div className="text-xs xs:text-sm bnine:mt-3 sm:text-base md:text-lg">{x.text}</div>
                    </div>
                    </div>
                })}
                </Slider>
                <button onClick={goNext}><img src="/images/right-arrow.png" alt="" className="absolute z-20 w-6 h-6 border rounded-full select-none md:h-8 md:w-8 opacity-30 right-2 top-1/3"/></button>
        </div>
        </div>
    )
}
