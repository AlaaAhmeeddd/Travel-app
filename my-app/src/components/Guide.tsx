import Image from 'next/image'
import React from 'react'

const Guide = () => {
    return (
        <div> 
            <div className='2xl:max-container padding-container pb-10 xl:pt-32'>
                <div>
                    <Image src="/favicon.ico" alt="" width={50} height={50} className='-translate-x-1'/>
                    <p className="text-xl text-green-50 -translate-y-1 uppercase mb-4">WE ARE HERE FOR YOU</p>
                </div>
                <div className='xl:flex gap-24'>
                    <p className='font-bold lg:text-6xl text-4xl flex-1 mb-7' style={{lineHeight: 'normal'}}>Guide You to Easy Path</p>
                    <p className='text-gray-30 flex-1'>
                        Only with the hilink application you will no longer get lost and get lost again,
                        because we already support offline maps when there is no internet connection in the field.
                        Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
                    </p>
                </div>
            </div>
            <div className='relative w-full 2xl:max-container'>
                <Image 
                    src="/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />
                <div className='md:absolute md:m-0 m-6 flex gap-3 md:py-8 p-8 md:pl-5 md:pr-7 rounded-3xl border shadow-md bg-white md:left-[5%] lg:top-20 md:top-10'>
                    <Image 
                        src="/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                        className="h-full w-auto"
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex justify-between gap-10'>
                                <p className='text-gray-20'>Destination</p>
                                <p className='text-green-50 font-semibold'>48 min</p>
                            </div>
                            <p className="font-bold text-xl mt-2">Aguas Calientes</p>
                        </div>
                        <div>
                            <div>
                                <p className='text-gray-20'>Start track</p>
                            </div>
                            <p className="font-bold text-xl mt-2">Wonorejo Pasuruan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide