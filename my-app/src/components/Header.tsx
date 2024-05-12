'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import MobileNav from './MobileNav';

export default function Header() {
    const [yScroll , setYScroll] = useState(0)
    useEffect(()=>{
        const handleScroll = ()=>{
            setYScroll(window.scrollY)
        }
        document.addEventListener('scroll' , handleScroll)
        return ()=>{
            document.removeEventListener('scroll' , handleScroll)
        }
    },[])
    return (
        <nav className={`${yScroll > 50 && 'pt-4 shadow-md'} max-container sticky top-0 left-0 padding-container py-5 flex justify-between items-center z-[100] bg-white`}>
            <div>
                <Link href='/'>
                    <Image src="/hilink-logo.svg" alt='logo' width={74} height={29}/>
                </Link>
            </div>
            <div>
                <ul className='lg:flex gap-10 hidden'>
                    {
                        NAV_LINKS.map((link)=>(
                            <li key={link.key} className='text-gray-50 hover:font-bold transition-all'>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='lg:hidden block z-40'>
                    <MobileNav />
                </div>
            </div>
            <Button text='Login' icon='/user.svg' type='button' variant='btn_dark_green' className='lg:flex hidden'/>
        </nav>
    )
}
