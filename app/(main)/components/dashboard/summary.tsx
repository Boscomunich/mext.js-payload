import { ArrowUp } from "lucide-react"

type SummaryItemsTypes ={
    name: string
    number: number
    percentage: number
}

const summaryItems: SummaryItemsTypes[] = [
    {
        name: 'rider',
        number: 12426,
        percentage: 36
    },
    {
        name: 'doctor',
        number: 12426,
        percentage: 36
    },
    {
        name: 'vendor',
        number: 12426,
        percentage: 36
    },
    {
        name: 'client',
        number: 12426,
        percentage: 36
    },
    {
        name: 'ambulance',
        number: 12426,
        percentage: 36
    }
]

function SummaryItem ({name, number, percentage}: SummaryItemsTypes) {

    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="border-[1px] border-[#E4E4E7] h-[80px] w-[20%] flex flex-col items-start justify-center rounded-[10px] bg-white px-[15px]">
            <div className="font-[400] text-[10px] leading-[18px] text-[#71717A] uppercase">
                total {name}
            </div>
            <div className="flex justify-between w-full">
                <div className="font-[700] leading-[32px] text-[18px] text-gray-900">
                    {formattedNumber}
                </div>
                <div className="font-[400] text-[10px] text-green-500 leading-[12.44px] flex justify-center items-center">
                    +{percentage}% <ArrowUp className="size-[10px]"/>
                </div>
            </div>
        </div>
    )
}

export default function Summary () {
    return (
        <div className="flex justify-center gap-3">
            {
                summaryItems.map((item, index) => (
                    <SummaryItem key={index} {...item}/>
                ))
            }
        </div>
    )
}