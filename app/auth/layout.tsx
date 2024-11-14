import Image from 'next/image';
import React from 'react'

import bgSvg from "@/assets/image/bg-form.svg"
import { Button } from '@/components/ui/button';
import { FacebookIcon, Linkedin, LucideMail, Slack, TwitterIcon } from 'lucide-react';

function Layout ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div className='h-full w-full relative bg-slate-950'>
        {/* <div className='h-full w-full relative bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-slate-900'> */}
            <Image src={bgSvg} alt='LoanLink' className='h-full w-full object-cover object-center' />
            <div className="absolute top-0 right-0 left-0 bottom-0">
                <div className="h-full w-full flex justify-center items-center">
                    <div className="w-[40%] h-[55%] p-4">
                        <div className="h-full w-full rounded-md flex overflow-hidden p-3 bg-slate-800">
                            <div className="w-[40%] flex justify-center items-start flex-col gap-4">
                                <p className="font-semibold text-muted">Auth Providers</p>
                                <div className="flex items-center gap-4">
                                    <Button size="icon"><LucideMail /></Button>
                                    <p className="text-muted-foreground font-semibold">Google</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button size="icon"><FacebookIcon /></Button>
                                    <p className="text-muted-foreground font-semibold">Facebook</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button size="icon"><TwitterIcon /></Button>
                                    <p className="text-muted-foreground font-semibold">Twitter</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button size="icon"><Slack /></Button>
                                    <p className="text-muted-foreground font-semibold">Slack</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button size="icon"><Linkedin /></Button>
                                    <p className="text-muted-foreground font-semibold">Linkedin</p>
                                </div>
                            </div>
                            <div className="w-[60%] bg-slate-700/40 p-4 rounded-md overflow-y-auto">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout