import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FdfImg2 from '@public/fdf_img/fdf-img-2.jpg'

const Author = () => {
  return (
    <div className="author flex py-5">
        <Image src={FdfImg2} width={60} height={60} alt="author" />
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} className="text-md font-bold text-green-500 hover:text-green-900">Oforkaire Emecheta</Link>
        </div>
    </div>
  )
}

export default Author