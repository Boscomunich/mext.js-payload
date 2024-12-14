import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"

//im just trying to replicate the object this should be fetched from the database and rendered with loading ui if any delay to improve user experience
const items = [
    {
        firstName: "Super",
        lastName: "Admin",
        online: true,
        typing: true,
        lastMessage: "5 min ago",
        unreadMessages: 4
    },
    {
        firstName: "Admin",
        lastName: "",
        online: false,
        typing: false,
        lastMessage: "8:15 am",
        unreadMessages: 2
    },
    {
        firstName: "Armadin",
        lastName: "Comlan",
        online: false,
        typing: false,
        lastMessage: "8:35 pm",
        unreadMessages: 0
    },
    {
        firstName: "Cameroon",
        lastName: "Willamson",
        online: false,
        typing: false,
        lastMessage: "9:05 pm",
        unreadMessages: 0
    },
    {
        firstName: "Fredjus",
        lastName: "Sewanu",
        online: false,
        typing: false,
        lastMessage: "01:48 am",
        unreadMessages: 0
    },
    {
        firstName: "Kristain",
        lastName: "Watson",
        online: false,
        typing: false,
        lastMessage: "10:10 pm",
        unreadMessages: 0
    },
    {
        firstName: "Guy",
        lastName: "Hawkin",
        online: true,
        typing: false,
        lastMessage: "02:17 am",
        unreadMessages: 4
    },
    {
        firstName: "Diame",
        lastName: "Abommey",
        online: false,
        typing: false,
        lastMessage: "Yesterday",
        unreadMessages: 4
    }
]

type DropDownContentsItemsTypes = {
    firstName: string,
    lastName: string,
    online: boolean,
    typing: boolean,
    lastMessage: string,
    unreadMessages: number
}

function DropDownContentsItems ({ firstName, lastName, online, typing, lastMessage, unreadMessages }: DropDownContentsItemsTypes) {

    const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

    return (
        <div className="flex justify-evenly items-center gap-4 px-4 w-full">
            <div className="size-[48px] rounded-full text-[#EB5757] bg-[#F8C4C4] font-[700] flex justify-center items-center relative">
                {initials}
                <div className={cn("size-[16px] top-[1px] left-[1px] absolute", !online && "hidden" )}>
                    <div className="size-[10px] rounded-full bg-[#10B981]"></div>
                </div>
            </div>
            <div className="w-[calc(100%-48px)]">
                <div className="w-full flex justify-between items-center h-[50%]">
                    <div className="text-[12px] font-[500] leading-[13.4px] overflow-hidden">
                        {firstName} {lastName}
                    </div>
                    <div className="text-[10px] font-[400] leading-[14.52px]">
                        {lastMessage}
                    </div>
                </div>
                <div className="w-full flex justify-between h-[50%]">
                    <div className="font-[400] text-[12px] text-[#0A2689] leading-[21px]">
                        {
                            typing ? "typing" : ""
                        }
                    </div>
                    <div className={ cn("w-[14px] h-[16px] bg-[#2446BC] text-[10px] text-white rounded-[4px] text-center", unreadMessages < 1 && "hidden")}>
                        { unreadMessages }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Messages () {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                    <div className="p-3 relative cursor-pointer">
                        <div className="absolute bg-[#4425F5] top-1 left-[50%] size-[16px] text-[10px] rounded-[4px] font-[300] text-white flex items-center justify-center">
                            10
                        </div>
                        <Mail className="size-[16px]"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[306px] h-[643px]">
                    <DropdownMenuLabel className="text-[#4425F5] font-[700] text-[18px] leading-[36px] px-5">
                        Messages
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