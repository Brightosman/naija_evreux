import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'

import IgImg1 from '@public/group_img/ig-img-1.jpeg'
import IgImg2 from '@public/group_img/ig-img-2.jpeg'
import FdfImg1 from '@public/fdf_img/fdf-img-1.jpg'
import FdfImg2 from '@public/fdf_img/fdf-img-2.jpg'
import FdfImg3 from '@public/fdf_img/fdf-img-3.jpg'

const MidSection = () => {
  return (
    <div className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
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
export default MidSection