import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell } from "lucide-react"

//im just trying to replicate the object this should be fetched from the database and rendered with loading ui if any delay to improve user experience
const items = [
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Support ticket",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
    {
        senderName: "Rider",
        timeSent: "5 min ago",
        message: "order #25345 has been re-assigned"
    },
]

type DropDownContentsItemsTypes = {
    senderName: string
    timeSent: string
    message: string
}

function DropDownContentsItems ({ senderName, timeSent, message }: DropDownContentsItemsTypes) {

    return (
        <div className="flex justify-evenly items-center gap-4 px-4 w-full">
            <div className="size-[48px] rounded-full text-[#4425F5] font-[700] flex justify-center items-center relative">
                <Bell/>
            </div>
            <div className="w-[calc(100%-48px)]">
                <div className="w-full flex justify-between items-center h-[50%]">
                    <div className="text-[12px] font-[500] leading-[13.4px] overflow-hidden">
                        {senderName}
                    </div>
                    <div className="text-[10px] font-[400] leading-[14.52px]">
                        {timeSent}
                    </div>
                </div>
                <div className="w-full flex justify-between overflow-hidden h-[14px]">
                    <div className="font-[400] text-[12px] text-[#9D9D9D] leading-[21px]">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Notification () {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                    <div className="p-3 relative cursor-pointer">
                        <div className="absolute bg-[#FF5247] top-1 left-[50%] size-[16px] text-[10px] rounded-[4px] font-[300] text-white flex items-center justify-center">
                            10
                        </div>
                        <Bell className="size-[16px]"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[306px] h-[643px]">
                    <DropdownMenuLabel className="text-[#4425F5] font-[700] text-[18px] leading-[36px] px-5">
                            Notification
                    </DropdownMenuLabel>
                        {
                            items.map((item, index) => (
                                <DropdownMenuItem key={index}>
                                    <DropDownContentsItems {...item}/>
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}