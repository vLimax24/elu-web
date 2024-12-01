import React from 'react'
import { Progress } from '@/components/ui/progress'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { calculatePlayerLevel, calculateXPForNextLevel, calculateXPInCurrentLevel } from '@/lib/xp-helpers'

export const XPBar = () => {
    const user = useQuery(api.users.getMyUser)
    const currentXP = user && user.xp;
    const level = currentXP && calculatePlayerLevel({ xp: currentXP }) + 1;
    const maxXP = level && calculateXPForNextLevel({ level });
    const levelXP = currentXP && calculateXPInCurrentLevel({ xp: currentXP });

    console.log({ currentXP, level, levelXP });
  

  return (
    <>
        {currentXP && level && maxXP && (
            <>
            <div className='flex items-center justify-between'>
                <p className='flex'>{levelXP} XP</p>
                <p className='flex'>{maxXP} XP</p>
            </div>
            <div className="flex items-center justify-between"> 
                <div className="text-white">{level - 1}</div>
                <Progress value={(currentXP / maxXP) * 100} className="w-full mx-2" />
                <div className="text-white">{level}</div>
            </div>
            </>
        )}
    </>
  )
}
