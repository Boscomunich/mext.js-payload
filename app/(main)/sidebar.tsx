'use client'
import { cn } from "@/lib/utils"
import { Bell, Bike, CarTaxiFront, ClipboardMinus, FileBox, FileUser, FolderKanban, FolderSync, House, LogOut, MessageSquareText, Pill, Settings, ShoppingCart, Store, TableOfContents, User, UserRoundCog, UserSearch, Workflow } from "lucide-react"
import { usePathname } from "next/navigation";
import React from "react";

type SideBarItemType = {
    name: string
    icon: React.ReactElement
    path: string
}

const sideBarItems: SideBarItemType[] = [
    {
        name: "Overview",
        icon: <House />,
        path: "/"
    },
    {
        name: "User Mgt.",
        icon: <User />,
        path: "/user-management"
    },
    {
        name: "Doctors Mgt.",
        icon: <UserSearch />,
        path: "/doctors-management",
    },
    {
        name: "Vendor Mgt.",
        icon: <Store />,
        path: "/vendor-management",
    },
    {
        name: "Rider Mgt.",
        icon: <Bike />,
        path: "/rider-management"
    },
    {
        name: "Ambulance Mgt",
        icon: <CarTaxiFront />,
        path: "/ambulance-management"
    },
    {
        name: "Order Mgt",
        icon: <ShoppingCart />,
        path: "/order-management"
    },
    {
        name: "Inventory Mgt",
        icon: <FileBox />,
        path: "/inventory-management"
    },
    {
        name: "Payment and Transactions",
        icon: <FolderSync />,
        path: "/payments"
    },
    {
        name: "Telemedicine Mgt.",
        icon: <Pill />,
        path: "/telemedicine-management"
    },
    {
        name: "Content Mgt.",
        icon: <TableOfContents />,
        path: "/content-management"
    },
    {
        name: "Support",
        icon: <UserRoundCog />,
        path: "/support"
    },
    {
        name: "Integration",
        icon: <Workflow />,
        path: "/integration"
    },
    {
        name: "Report and Analyses",
        icon: <ClipboardMinus />,
        path: "/report"
    },
    {
        name: "Staff Mgt.",
        icon: <FolderKanban />,
        path: "/staff-management"
    },
    {
        name: "Notification",
        icon: <Bell/>,
        path: "/notifications"
    },
    {
        name: "Master/Marketing",
        icon: <FileUser />,
        path: "/marketing"
    },
    {
        name: "Internal Messages",
        icon: <MessageSquareText />,
        path: "/messages"
    },
    {
        name: "Settings",
        icon: <Settings />,
        path: "/settings"
    },
]

function SideBarItem ({name, icon, path}: SideBarItemType) {
    const pathname = usePathname();
    return (
        <div className={cn("w-full h-[50px] rounded-[10px] p-[10px] flex items-center justify-start gap-3 hover:bg-[#4425F50A] cursor-pointer", pathname === path && "bg-[#4425F50A] text-[#4425F5]" )}>
            <div className="size-24px">
                {icon}
            </div>
            <div className="font-[400] leading-[15.31px] pt-2">
                {name}
            </div>
        </div>
    )
}

export default function SideBar () {
    return (
        <div className="mt-[150px] ml-[40px] left-0 w-[300px] h-[72%] fixed overflow-y-auto no-scrollbar">
            <div className="w-full py-[33px] pl-[30px] pr-[15px] bg-white flex flex-col gap-3">
                {
                    sideBarItems.map((item, index) => (
                        <SideBarItem key={index} {...item}/>
                    ))
                }
                <div className={cn("w-full h-[50px] rounded-[10px] p-[10px] flex items-center justify-start gap-3 hover:bg-[#4425F50A] cursor-pointer text-[#FE265B]")}>
                    <LogOut className="size-24px"/>
                    <div className="font-[400] leading-[15.31px] pt-2">
                        Log out
                    </div>
                </div>
            </div>
        </div>
    )
}