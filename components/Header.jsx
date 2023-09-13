"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {HiOutlineSearch, HiOutlineHome } from 'react-icons/hi';
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import {FaBloggerB} from "react-icons/fa"

const Header = () => {

  const { data: session } = useSession();

      const [providers, setProviders] = useState(null);
      const [toggleDropdown, setToggleDropdown] = useState(false);

      useEffect(() => {
          (async () => {
          const res = await getProviders();
          setProviders(res);
          })();
      }, []);


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
                src='/logo.jpg'
                alt='logo'
                width={80}
                height={80}
                className='object-contain'
            />
            <p className='logo_text'>9ja in Eure</p>
        </Link>

        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <HiOutlineHome className="mx-auto text-green-500"size={25} />
                    </div>
                </Link>
                <Link href="/about">
                    <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">        
                        <RiFlag2Line  className="mx-auto text-green-500"size={25}/>                     
                    </div>
                </Link>
                <Link href="/gallery">
                    <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <MdOutlineOndemandVideo className="mx-auto text-green-500"size={25} />
                    </div>
                </Link>
                <Link href="/blog">
                    <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <FaBloggerB className="mx-auto text-green-500"size={25} />
                    </div>
                </Link>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <AiOutlineShop className="mx-auto text-green-500"size={25} />
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <IoGameControllerOutline className="mx-auto text-green-500"size={25} />
                </div>
            </div>
        </div>

        {/* <div className='sm:flex hidden'>
          <div className='flex gap-3 md:gap-5'>
            <Link href='/' className='black_btn'>
                Join Us
            </Link>

            <Link href='/' className='black_btn'>
                Sign In
            </Link>
          </div>
        </div> */}

        <div className='sm:flex hidden'>
            {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-notice' className='black_btn'>
                Create Post
                </Link>

                <button type='button' onClick={signOut} className='outline_btn bg-green-900'>
                Sign Out
                </button>

                <Link href='/profile'>
                <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                />
                </Link>
            </div>
            ) : (
            <>
                {providers &&
                Object.values(providers).map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                        signIn(provider.id);
                    }}
                    className='green_btn'
                    >
                    Sign in
                    </button>
                ))}
            </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
            <div className='flex'>
                <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                onClick={() => setToggleDropdown(!toggleDropdown)}
                />

                {toggleDropdown && (
                <div className='dropdown'>
                    <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                    >
                    My Profile
                    </Link>
                    <Link
                    href='/create-notice'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                    >
                    New Notice
                    </Link>
                    <button
                    type='button'
                    onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                    }}
                    className='mt-5 w-full black_btn'
                    >
                    Sign Out
                    </button>
                </div>
                )}
            </div>
            ) : (
            <>
                {providers &&
                Object.values(providers).map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                        signIn(provider.id);
                    }}
                    className='black_btn'
                    >
                    Sign in
                    </button>
                ))}
            </>
            )}
        </div>
    </nav>
  )
}

export default Header