'use client'

import * as React from "react"
import { ThemeToggle } from "@/components/core/ThemeToggle"
import { ChevronDown, icons, Home, Settings } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label"
import { SidebarLink } from "./SidebarLink"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { XPBar } from "./XPBar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

const data = {
  navMain: [
    {
      title: "Focus",
      url: "#",
      items: [
        {
          title: "Pomodoro Timer",
          url: "#",
          iconName: "GraduationCap",
          IconColor: "#FF44DD",
        },
        {
          title: "52/17 Technique",
          url: "#",
          iconName: "Clock11",
          IconColor: "#0077D8",
        },
        {
          title: "5-10-15 Technique",
          url: "#",
          iconName: "RotateCw",
          IconColor: "#00FF00",
        },
      ],
    },
    {
      title: "Quests",
      url: "#",
      items: [
        {
          title: "Main Quests",
          url: "#",
          iconName: "Swords",
          IconColor: "#A927FF",
        },
        {
          title: "Daily Quests",
          url: "#",
          isActive: true,
          iconName: "Repeat",
          IconColor: "#D35800",
        },
      ],
    },
    {
      title: "Rewards",
      url: "#",
      items: [
        {
          title: "Leaderboard (Coming Soon)",
          url: "#",
          iconName: "Trophy",
          IconColor: "#7A7A7A",
        },
        {
          title: "Achievements",
          url: "#",
          iconName: "Medal",
          IconColor: "#3DD68C",
        },
        {
          title: "XP",
          url: "#",
          iconName: "Star",
          IconColor: "#009DFF",
        },
      ],
    },
    {
      title: "Customization",
      url: "#",
      items: [
        {
          title: "Themes (Coming Soon)",
          url: "#",
          iconName: "Paintbrush",
          IconColor: "#7A7A7A",
        },
        {
          title: "Avatars",
          url: "#",
          iconName: "SquareUserRound",
          IconColor: "#00D8B4",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      items: [
        {
          title: "Activity",
          url: "#",
          iconName: "Activity",
          IconColor: "#3DD68C",
        },
        {
          title: "Share Stats",
          url: "#",
          iconName: "Send",
          IconColor: "#1A00FF",
        },
      ],
    },
  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser()
  const router = useRouter()

  return (
    <Sidebar {...props} className="!border-l-0 !border-r-0 pt-3 pl-2">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between">
              <SidebarMenuButton size="default" asChild className="w-fit mr-4">
                <div className="py-4">
                  <div className="flex items-center gap-3">
                    {user ? (
                      <Image
                        src={user.imageUrl}
                        alt="pb"
                        width={25}
                        height={25}
                        className="rounded-md"
                        id="image-profile"
                      />
                    ) : (
                      <Skeleton className="size-[25px] rounded-md" />
                    )}
                    {user ? (
                      <Label htmlFor="image-profile" className="text-white">{user.fullName}</Label>
                    ) : (
                      <Skeleton className="w-12 h-3" />
                    )}
                  </div>
                  {user && <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />}
                </div>
              </SidebarMenuButton>
              <div className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="aspect-square dark:bg-transparent dark:hover:bg-gray-200/10 bg-gray-100" size={"iconSmall"} onClick={() => router.push("/dashboard")}>
                        <Home className="text-[#858587]"/>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1d1b1b]">
                      <p className="text-white">Home</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="aspect-square dark:bg-transparent dark:hover:bg-gray-200/10 bg-gray-100" size={"iconSmall"}>
                        <Settings className="text-[#858587]"/>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1d1b1b]">
                      <p className="text-white">Settings</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="aspect-square dark:bg-transparent dark:hover:bg-gray-200/10 bg-gray-100">
                        <ThemeToggle />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1d1b1b]">
                      <p className="text-white">Theme</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <>
        <XPBar />
        {data.navMain.map((item) => (
          <Collapsible defaultOpen className="group/collapsible" key={item.title}>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  {item.title}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 duration-300" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <AnimatePresence initial={false}>
                {item.items && (
                  <CollapsibleContent>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {item.items.map((subItem, index) => (
                        <motion.div
                          key={subItem.title}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <SidebarLink
                            labelText={subItem.title}
                            iconName={subItem.iconName as keyof typeof icons}
                            iconColor={subItem.IconColor}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </SidebarGroup>
          </Collapsible>
        ))}
        </>
      </SidebarContent>
    </Sidebar>
  )
}