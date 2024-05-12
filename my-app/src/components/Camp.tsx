import React from 'react'
import CampSite from './CampSite'
import Image from 'next/image'

const Camp = () => {
    return (
        <div className='2xl:max-container py-10 lg:py-20 lg:mb-10 xl:mb-20 relative flex flex-col'>
            <div className='overflow-x-auto h-[340px] lg:h-[400px] xl:h-[640px] flex items-start justify-start gap-8 w-full hide-scrollbar'>
                <CampSite bgImage='bg-bg-img-1' title='Putuk Truno Camp' subTitle='Prigen, Pasuruan' joinedNum='50+ Joined' />
                <CampSite bgImage='bg-bg-img-2' title='Mountain View Camp' subTitle='Somewhere in the Wilderness' joinedNum='50+ Joined' />
            </div>
            <div className='flex items-center justify-end lg:-mt-20'>
                <div className='overflow-hidden lg:absolute lg:max-w-[500px] xl:max-w-[734px] bg-green-50 xl:p-20 py-10 px-10 text-white m-10 lg:rounded-5xl rounded-3xl'>
                    <h1 className='text-3xl mb-6 leading-snug'><span className='font-bold'>Feeling Lost</span> And Not Knowing The Way?</h1>
                    <p>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to start an adventure</p>
                    <Image src='/quote.svg' alt='' width={186} height={219} className='absolute right-6 bottom-14 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0'/>
                </div>
            </div>
        </div>
    )
}

export default Camp