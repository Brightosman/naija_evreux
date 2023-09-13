import Image from 'next/image'
import React from 'react'

import IgImg1 from '@public/group_img/ig-img-1.jpeg'


const InstagramImg = (socialImg) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <Image src={IgImg1} alt='a picture should to be here' />
        <Image src={socialImg} alt='/' />
    </div>
  )
}

export default InstagramImg