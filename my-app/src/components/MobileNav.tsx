import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    },[isOpen])
    return (
        <div className='flex gap-4'>
            <Button text='Login' icon='/user.svg' type='button' variant='btn_dark_green_small' className='flex'/>
            <Image
                src='/menu.svg'
                alt=''
                width={32}
                height={32}
                className='cursor-pointer'
                onClick={() => setIsOpen(true)}
            />
            <div
                ref={navRef}
                className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-80 h-full bg-green-90 text-white px-10 py-24 transition-all z-50`}
            >
                <Image
                    src='/close.svg'
                    width={32}
                    height={32}
                    alt=''
                    className='cursor-pointer absolute right-6 top-5'
                    onClick={() => setIsOpen(false)}
                />
                <ul className='flex flex-col gap-6 items-center'>
                    {NAV_LINKS.map(link => (
                        <li key={link.key} className='hover:font-bold hover:bg-green-50/10 hover:px-8 transition-all py-2 px-6 w-60 rounded-md cursor-pointer'>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`absolute w-full h-[100vb] top-0 left-0 bg-black/30 z-40 ${
                    isOpen ? 'block' : 'hidden'
                }`}
            ></div>
        </div>
    );
}
