import React from 'react'
import { PEOPLE_URL } from '@/constants/index'
import Image from 'next/image'

type campProps = {
    bgImage: string,
    title: string,
    subTitle: string,
    joinedNum: string,
}
function CampSite({bgImage , title, subTitle, joinedNum}: campProps) {
    return (
        <div className={`h-full w-full min-w-[1100px] 2xl:rounded-5xl md:rounded-r-5xl py-10 md:px-24 px-10 flex flex-col justify-between ${bgImage}`}>
            <div className='text-white flex gap-4 items-center'>
                <Image src='/folded-map.svg' alt='' width={60} height={60} className='bg-green-50 p-4 rounded-full'/>
                <div>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </div>
            <div className='flex items-center text-white'>
                {Array(PEOPLE_URL.length).fill(1).map((_, index)=>(
                    <Image key={index} src={PEOPLE_URL[index]} alt='' width={40} height={40} className={`z-[${index}] -ml-4`}/>
                ))}
                <p className='font-bold ml-7 text-xl'>{joinedNum}</p>
            </div>
        </div>
    )
}

export default CampSite