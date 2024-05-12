import Image from 'next/image'
import React from 'react'

type ButtonProps = {
    text: string,
    icon? : string,
    type: 'submit' | 'button',
    variant: string
    className?: string,
}
function Button({text , icon, type, variant, className}: ButtonProps) {
    return (
        <button className={`${variant} rounded-full flex gap-3 items-center justify-center ${className}`} type={type}>
            {icon && <Image src={icon} alt='' width={24} height={24}/>}
            <span className='font-bold'>{text}</span>
        </button>
    )
}

export default Button