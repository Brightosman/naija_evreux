import {React, useState, useEffect} from 'react'

import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper'
import 'swiper/css'

import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'

import IgImg1 from '@public/group_img/ig-img-1.jpeg'
import IgImg2 from '@public/group_img/ig-img-2.jpeg'
import FdfImg1 from '@public/fdf_img/fdf-img-1.jpg'
import FdfImg2 from '@public/fdf_img/fdf-img-2.jpg'
import FdfImg3 from '@public/fdf_img/fdf-img-3.jpg'

const MidSection2 = () => {
  SwiperCore.use([Autoplay]);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center text-green-800">Most Popular</h1>
        {domLoaded && (
          <Swiper
        //spaceBetween={20}
        slidesPerView={3}
        loop={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
          autoplay= {{
              delay:2000,
              disableOnInteraction: false
          }}>
            <SwiperSlide> {Post()} </SwiperSlide>
            <SwiperSlide> {Post()} </SwiperSlide>
            <SwiperSlide> {Post()} </SwiperSlide>
            <SwiperSlide> {Post()} </SwiperSlide>
            <SwiperSlide> {Post()} </SwiperSlide>
        </Swiper>
        )}
        
    </div>
  )
}

function Post(){
    return (
        <div className="item">
            <div className="images">
                <Image src={FdfImg1} width={400} height={400} alt="main image"/>
            </div>
            <div className="info justify-center flex-col py-4">
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
}

export default MidSection2