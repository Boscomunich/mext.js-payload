import { getPayload } from 'payload'
import config from '@payload-config'
import { cn } from '@/lib/utils'
import { Ellipsis } from 'lucide-react'

type PaymentItemType = {
    id: string,
    paymentId: string,
    amount: number,
    paymentMethod: string,
    cardDetails: {
        cardType: string, 
        cardNumber: string 
    },
    status: string,
    transactionDate: string,
    createdAt: string,
    updatedAt: string
}

export default async function Payment () {
    const payload = await getPayload({ config })

    const payments: any = await payload.find({
        collection: 'payments',
        sort: "createdAt",
        depth: 1,
        page: 1,
        limit: 4,
    })

    function PaymentItem (props: PaymentItemType) {
        //for security purpose that database should not return the whole card number
        const lastFourDigits = props.cardDetails.cardNumber.slice(-4);
        const date = new Date(props.transactionDate).toLocaleDateString('en-US');;
        
        return (
            <div className='flex justify-evenly items-center border border-gray-200 h-[86px] w-full gap-5 px-5'>
                <div className={cn("h-[26px] rounded-[40px] text-[10px] flex justify-center items-center gap-2 w-[100px]", props.status === "completed" ? "bg-[#DCFCE7] text-green-900" : props.status === "pending" ? "bg-[#FEF9C3] text-yellow-900" : "bg-[#FEE2E2] text-red-900")}>
                    <div className={cn("size-[8px] rounded-full", props.status === "completed" ? "bg-green-500" : props.status === "pending" ? "bg-yellow-500" : "bg-red-500")}/>
                    {props.status}
                </div>
                <div className='h-[46px] w-[100px]'>
                    <div className='font-[700] text-[12px] leading-[22px] flex justify-start items-center gap-[1px]'>
                        {props.cardDetails.cardType}
                        ****{lastFourDigits}
                    </div>
                    <div className='font-[500] text-[12px] leading-[21px] text-gray-500'>
                        {props.paymentMethod}
                    </div>
                </div>
                <div className='h-[46px] w-[50px]'>
                    <div className='font-[700] text-[12px] leading-[22px] flex justify-start items-center gap-[1px]'>
                        ${props.amount}
                    </div>
                    <div className='font-[500] text-[12px] leading-[21px] text-gray-500'>
                        {date}
                    </div>
                </div>
                <div className='font-[500] text-[12px] leading-[21px] text-gray-500 w-[50px]'>
                    Ecommerce
                </div>
                <Ellipsis className="text-gray-500 size-[16px]"/>
            </div>
        )
    }

    return (
        <div className='w-[70%] h-[420px] mb-[30px] overflow-y-scroll no-scrollbar border border-gray-200 bg-white p-5 mt-5 rounded-[10px]'>
            <div className='flex justify-between items-center w-full'>
                <div className='font-[700] leading-[24px]'>
                    Recent Transactions
                </div>
                <div className='font-[500] text-[10px] leading-[21px] text-indigo-600'>
                    See All Transactions
                </div>
            </div>
            <div className='font-[500] text-[10px] leading-[21px] text-gray-500'>
                Here are the lists of  recent transactions
            </div>
            <div>
                {
                    payments.docs.map((payment: PaymentItemType, index: number) => (
                        <PaymentItem key={index} {...payment}/>
                    ))
                }
            </div>
        </div>
    )
}