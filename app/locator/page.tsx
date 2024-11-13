"use client"
import { Button } from "@/components/ui/button"
import { LucideActivity, LucideSettings2, LucideStar } from "lucide-react"
import dynamic from "next/dynamic"
const LoanLinkMap = dynamic (() => import ("@/components/sys_components/map").then ((component) => component.LoanLinkMap), { ssr: false })

const locations = [
    {
        "id": "matero",
        "lng": 28.2329,
        "lat": -15.3712
    },
    {
        "id": "chilanga",
        "lng": 28.2719,
        "lat": -15.5494
    },
    {
        "id": "munali",
        "lng": 28.3355,
        "lat": -15.3664
    },
    {
        "id": "makeni",
        "lng": 28.2369,
        "lat": -15.4812
    },
    {
        "id": "chilenje",
        "lng": 28.3201,
        "lat": -15.4375
    },
    {
        "id": "libala",
        "lng": 28.3081,
        "lat": -15.4300
    },
    {
        "id": "kalingalinga",
        "lng": 28.3461,
        "lat": -15.3797
    },
    {
        "id": "ibex_hill",
        "lng": 28.3703,
        "lat": -15.3790
    },
    {
        "id": "kabulonga",
        "lng": 28.3296,
        "lat": -15.4440
    },
    {
        "id": "city_center",
        "lng": 28.2823,
        "lat": -15.4160
    },
    {
        "id": "university_of_zambia",
        "lng": 28.3327,
        "lat": -15.3922
    },
    {
        "id": "eastpark_mall",
        "lng": 28.3346,
        "lat": -15.3915
    },
    {
        "id": "levy_mwanawasa_hospital",
        "lng": 28.2870,
        "lat": -15.4163
    },
    {
        "id": "longacres",
        "lng": 28.3036,
        "lat": -15.4051
    },
    {
        "id": "lusaka_international_airport",
        "lng": 28.4524,
        "lat": -15.3299
    },
    {
        "id": "mandevu",
        "lng": 28.2804,
        "lat": -15.3621
    },
    {
        "id": "woodlands",
        "lng": 28.3194,
        "lat": -15.4314
    },
    {
        "id": "kabwata",
        "lng": 28.2995,
        "lat": -15.4246
    }
]


const Locator = () => {
    return (
        <div className="h-full w-full overflow-hidden flex justify-between">
            <div className="h-full w-[22%] bg-slate-950">
                <div className="h-full w-full p-4">
                    <div className="h-[70px] w-full flex justify-center items-center overflow-hidden">
                        <div className="h-full w-full rounded-full bg-slate-800 text-slate-400 overflow-hidden grid grid-cols-10 gap-3">
                            <div className="col-span-6">
                                <div className="h-full w-full flex pl-8 font-semibold items-center">
                                    LoanLink Filters
                                </div>
                            </div>
                            <div className="col-span-4 pr-4 flex justify-center items-center">
                                <div className="h-[50%] w-full flex justify-end items-center gap-2">
                                    <div className="h-[45px] w-[45px] rounded-full bg-slate-700">
                                        <div className="h-full w-full flex justify-center items-center cursor-pointer">
                                            <LucideSettings2 className="h-full" />
                                        </div>
                                    </div>
                                    <div className="h-[45px] w-[45px] rounded-full bg-slate-700">
                                        <div className="h-full w-full flex cursor-pointer justify-center items-center">
                                            <LucideActivity />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[93%] mt-4 rounded-lg py-3">
                        <div className="h-full w-full overflow-y-auto pr-2">
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[190px] bg-slate-800 rounded-md w-full mt-4 p-3">
                                <div className="h-full w-full grid grid-cols-7">
                                    <div className="logo col-span-2 bg-slate-700">
                                        <div className="h-full w-full flex justify-center"></div>
                                    </div>
                                    <div className="col-span-5 p-1">
                                        <div className="h-full w-full p-2 rounded-md">
                                            <h2 className="font-semibold text-muted pb-1 capitalize">Kwacha Loans</h2>
                                            <p className="flex justify-center items-center text-muted-foreground text-[11px] w-full h-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum, fugiat error deleniti quibusdam dolore</p>
                                            <div className="flex mt-2 justify-between items-center p-1">
                                                <p className="p-1 flex gap-2 items-center">
                                                    <LucideStar className="text-yellow-400" />
                                                    <span className="font-semibold text-muted">5</span>
                                                </p>
                                                <Button className="text-[9px] bg-orange-500 h-[20px]">Apply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[78%] p-4 rounded-xl">
                <LoanLinkMap center={{lng: 28.4524, lat: -15.3299}} locations={locations} />
            </div>
        </div>
    )
}

export default Locator