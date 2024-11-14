import Image from 'next/image';
import React from 'react'

import bgSvg from "@/assets/image/bg-form.svg"

function Layout ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div className='h-full w-full relative bg-slate-950'>
            <Image src={bgSvg} alt='LoanLink' className='h-full w-full object-cover object-center' />
            <div className="absolute top-0 right-0 left-0 bottom-0">
                <div className="h-full w-full flex justify-center items-center">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Layout