import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex gap-32 bg-pattern 2xl:max-container padding-container py-24
            2xl:rounded-5xl bg-no-repeat xl:max-h-[598px] bg-center w-full pb-[100px] 
            sm:flex-row flex-col sm:gap-12 sm:py-24 lg:px-20">
                <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 text-white'>
                    <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:max-w-[320px]">Get for free now!</h2>
                    <p className="text-[16px] font-[400] text-gray-10">Available on iOS and Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button 
                            type="button"
                            text="App Store"
                            icon="/apple.svg"
                            variant="btn_white"
                            className='w-full'
                        />
                        <Button 
                            type="button"
                            text="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            className='w-full border'
                        />
                    </div>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <Image src="/phones.png" alt="phones" width={550} height={870} />
                </div>
            </div>
        </div> 
    )
}

export default GetApp