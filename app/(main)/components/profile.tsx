import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronsLeftRight, CircleHelp, LogOut, Settings, User, Users } from "lucide-react"
import Image from "next/image"



export default function Profile () {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                    <div className="">
                        <div className="h-[53px] flex justify-start items-center">
                            <Image 
                            src='https://s3-alpha-sig.figma.com/img/f5f0/a8c6/681ae1f12f507e654b307c5e9f66893e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCdEcfqFeWiPkwhnA9oKr3MUlBTqW-UhBSRKGOtKXXa8W5Y22EB9pgnJQY4fGEzJBoC2jdEsoMbkzR0enn3gIzB9KdFksLLVcK6Leii30z-pZDvPicJnaQNQgXTLv4TGHYDaVmJ0FE3l~6v0~gQwNr02371vLGOjfFLfD5B7SdQmWAJP1QC9uAhEdjg-rr~nwNWCkzlCFv6u~6~ntBQP5jNnifsF~mE3k6EDxZNL8B6FNGteTv5D-OhvUAuyp99KAmeotXTJ9GnIHpx2~Wo-aeGR5LrN2OeimprwNvvhBVdz34a1dz3jWtGGgMaF0N7N7Bv9HOewCsSabY2donjp5A__'
                            alt="user"
                            width={20}
                            height={20}
                            className="rounded-full"/>
                            <ChevronDown className="h-[10px] w-[17px]"/>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[240px] h-auto">
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <User />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            View profile
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <Settings />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            Settings
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <Users />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            Team
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <CircleHelp />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            Support
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <ChevronsLeftRight />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            Integration
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="flex justify-start gap-3 items-center">
                        <LogOut />
                        <div className="text-[#344054] text-[14px] font-[400] leading-[20px]">
                            Log out
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}