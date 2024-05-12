import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className="overflow-hidden max-container padding-container flex xl:flex-row flex-col gap-20 md:gap-24 py-10 lg:py20 relative">
            <div className="hero-map" />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src="/favicon.ico" alt="" width={50} height={50} className='-translate-x-1'/>
                <p className="lg:text-[88px] leading-tight text-5xl font-bold lg:-translate-y-6 -translate-y-3 ">Putuk Truno Camp Area</p>
                <p className='text-gray-50 pb-10'>
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
                    We can help you on an adventure around the world in just one app
                </p>
                <div className='flex gap-x-2 gap-y-6 flex-col sm:flex-row'>
                    <div className='flex gap-2'>
                        {Array(5).fill(1).map((_, index)=>(
                            <Image key={index} src="/star.svg" alt="" width={25} height={25} />
                        ))}
                    </div>
                    <p className='text-blue-70 lg:text-xl sm:ml-3'><span className='font-bold'>198k </span>Excellent Reviews</p>
                </div>
                <div className='py-10 flex sm:flex-row flex-col gap-5 w-full sm:items-center'>
                    <Button type='button' text='Download App' variant='btn_green'/>
                    <Button type='button' variant='btn_white_text' icon='/play.svg' text='How we work?'/>
                </div>
            </div>
            <div className='relative z-30 flex flex-1 items-start'>
                <div className='bg-green-90 rounded-3xl w-[268px] p-7'>
                    <div className='mb-8'>
                        <div className='flex justify-between'>
                            <p className='text-gray-20'>Location</p>
                            <Image src='close.svg' alt='' width={25} height={25} />
                        </div>
                        <p className='font-bold text-xl text-white'>Aguas Calientes</p>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-gray-20'>Distance</p>
                            <p className='text-gray-20'>Elevation</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xl text-white'>173.28 mi</p>
                            <p className='font-bold text-xl text-white'>2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero