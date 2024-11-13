import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import React from 'react'

type TipToolProps = {
    trigger: string,
    title: string,
}

const TipTool: React.FC<TipToolProps> = ({ trigger, title}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{ trigger }</TooltipTrigger>
                <TooltipContent>
                    <p> { title } </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TipTool
