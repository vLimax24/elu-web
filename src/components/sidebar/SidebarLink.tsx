import React from 'react'
import { IconWithBackground } from '../core/IconWithBackground'
import { Label } from "@/components/ui/label"
import { icons } from "lucide-react"

type SidebarLinkProps = {
    iconName: keyof typeof icons;
    labelText: string;
    iconColor: string;
}

export const SidebarLink = ({ iconName, labelText, iconColor }: SidebarLinkProps) => {
    return (
        <div className='flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-gray-200/50 pl-2 pr-4 py-1 rounded-md'>
            <IconWithBackground name={iconName} size={18} color={iconColor} id={iconName} />
            <Label htmlFor={iconName} className="text-white">{labelText}</Label>
        </div>
    )
}