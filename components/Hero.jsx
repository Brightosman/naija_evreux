"use client"

import Image from "next/image"

import React from 'react'
const Hero = () => {

    const handleScroll = () => {}
  return (
    <div className="flex items-center justify-center">
        <div className="w-1/2 justify-center">
            <h1 className="flex items-center hero__title">
                Nigerians in Eure(Evreux)
            </h1>

            <p>You are highly welcomed to our webpage
                Bringing all Nigerians together to confront our challenges but also to celebrate our uniqueness
            </p>

            
        </div>
        <div className="w-1/2">
            <div className="hero__image">
                <Image src="/logo.jpg" 
                alt="Presidential Seal"
                width={300}
                height={300}
                //fill className="object-contain" 

                />
                <div className="hero__image-overlay" />
            </div>
        </div>
    </div>
  )
}

export default Hero
