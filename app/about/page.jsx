import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="justify-center">
            <Image src="/MrPresident2.jpg"alt="Presidential Seal"
                width={400}
                height={400}
            />
        </div>
        <div className="justify-center w-1/2 flex flex-col">
            <h1 className="text-6xl">Turning my vision into reality</h1>
            <p>As we march into the future, clearer than ever our footprints stands as temporary evidence of what is and what was </p>
            <p>Left to our individuality our footprints would be a mess,   </p>
        </div>
    </div>
  )
}

export default About