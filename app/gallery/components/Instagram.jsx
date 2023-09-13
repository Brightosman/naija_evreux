import React from 'react'
import Image from 'next/image'

import IgImg1 from '@public/group_img/ig-img-1.jpeg'
import IgImg2 from '@public/group_img/ig-img-2.jpeg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold text-green-400'>These serves as icons and as reminders of memories made through snippet of time shared between some members </p>
        <div>
          <InstagramImg socialImg={IgImg1} />
          <Image src={IgImg1} />
          <Image src={IgImg2} />
        </div>
    </div>
  )
}

export default Instagram