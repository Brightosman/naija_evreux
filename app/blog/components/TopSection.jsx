
//'use client'
import {React, useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'

import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'
import 'swiper/css'

import IgImg1 from '@public/group_img/ig-img-1.jpeg'
import IgImg2 from '@public/group_img/ig-img-2.jpeg'
import FdfImg1 from '@public/fdf_img/fdf-img-1.jpg'
import FdfImg2 from '@public/fdf_img/fdf-img-2.jpg'
import FdfImg3 from '@public/fdf_img/fdf-img-3.jpg'

const TopSection = () => {
  SwiperCore.use([Autoplay]);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <div className='top-section py-16'>

        <div className='container mx-auto md:px-20'></div>
        <h1 className='font-bold text-green-900 text-4xl pb-12 text-center'>Trending </h1>
        

    {domLoaded && (
      <Swiper
      //spaceBetween={20}
      slidesPerView={1}
      loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
        autoplay= {{
            delay:2000,
            disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide2()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      ...
    </Swiper>
    )}
        
  </div>
  )

  function Slide(){
  return(
    <div className='grid md:grid-cols-2'>
      <div className='image'>
        <Image src={FdfImg1} width={600} height={600} alt="main image"/>
      </div>
      <div className='info'>
      <div className="cat">
        <Link href={"/"}> Evreux</Link>
        <Link href={"/"}>22-May-2023 </Link>
      </div>

      <div className="title">
        <Link href={"/"} className="text-3xl text-green-600 md:text-6xl"> Brotherhood festival </Link>
      </div>
      <Author />
      <p className="text-green-900 py-3">
        Fete de Frantanitie 2023 was a resounding success especially for us 9ja in Evreux(Eure)
      </p>

      </div>
    </div>
  )

  
};

 function Slide2(){
  return(
    <div className='grid md:grid-cols-2'>
      <div className='image'>
        <Image src={FdfImg3} width={600} height={600}/>
      </div>
      <div className='info'>
      <div className="cat">
        <Link href={"/"}> <a> Evreux</a></Link>
        <Link href={"/"}> <a> 22-May-2023</a></Link>
      </div>

      <div className="title">
        <Link href={"/"}> <a className="text-3xl text-green-600 md:text-6xl"> Testing Slide Two</a></Link>
      </div>
      <Author />
      <p className="text-green-900 py-3">
        Fete de Frantanitie 2023 was a resounding success especially for us 9ja in Evreux(Eure)
      </p>

      </div>
    </div>
  )

  
};


  
}



export default TopSection