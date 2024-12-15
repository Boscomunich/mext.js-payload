import { ChevronDown, Globe } from "lucide-react";
import Messages from "./components/messages";
import Notification from "./components/notification";
import Profile from "./components/profile";


export default function Navbar () {
    return (
        <div className="w-full fixed z-[1000] top-0 h-[120px] bg-white flex justify-between items-center px-[40px]">
            <div className="w-[50%] flex justify-start">
                <div className="w-[50%] min-w-[330px] h-[86px] font-[700] text-[28px] leading-[46px] flex justify-start items-center">
                    <h1>LOGO</h1>
                </div>
                <div className="flex justify-center h-[86px] items-center font-[500] text-[28px] leading-[44.91px]">
                    <h1>Overview</h1>
                </div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
                <div className="px-5 h-[53px] flex justify-start items-center gap-3">
                    <div className="flex justify-center gap-3 items-center text-[12px] font-[500] cursor-pointer">
                        <div className="flex gap-1 items-center justify-center">
                            <Globe className="size-[16px]"/>
                            <p className="pt-1">
                                English 
                            </p>
                        </div>
                        <ChevronDown className="h-[10px] w-[17px]"/>
                    </div>
                    <Messages/>
                    <Notification/>
                </div>
                <Profile/>
            </div>
        </div>
    )
}