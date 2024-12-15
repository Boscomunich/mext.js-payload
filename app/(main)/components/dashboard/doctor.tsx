import { getPayload } from 'payload'
import config from '@payload-config'
import { cn } from '@/lib/utils'
import { Ellipsis } from 'lucide-react'
import Image from 'next/image'

type DoctorItemType = {
    id: string,
    username: string,
    role: string,
    doctorFields: {
        specialization: string,
        phone: string,
        address: string,
        consultations: number
    },
    email: string,
    createdAt: string,
    updatedAt: string,
}

export default async function Doctor () {
    const payload = await getPayload({ config })

    const doctors: any = await payload.find({
        collection: 'users',
        where: {
            role: {
                equals: 'doctor'
            }
        },
        sort: "createdAt",
        depth: 1,
        page: 1,
        limit: 4,
    })

    function PaymentItem (props: DoctorItemType) {
        return (
            <div className='flex justify-between items-center border border-gray-200 h-[86px] w-full'>
                <div className='w-[60%] flex justify-start items-center gap-2 h-[33px]'>
                    <div className='rounded-full size-[33px]'>
                        <Image
                        src="/doctor.svg"
                        width={33}
                        height={33}
                        alt="doc"/>
                    </div>
                    <div className='w-[100px]'>
                        <div className='font-[700] text-[10px] leading-[22px] flex justify-start items-center'>
                            {props.username}
                        </div>
                        <div className='font-[500] text-[10px] leading-[21px] text-gray-500'>
                            {props.doctorFields.specialization}
                        </div>
                    </div>
                </div>
                <div className='h-[33px] w-[40%] flex flex-col justify-end items-start'>
                    <div className='font-[700] text-[12px] leading-[22px] flex justify-start items-center gap-[1px]'>
                        {props.doctorFields.consultations}
                    </div>
                    <div className='font-[400] text-[10px] leading-[18px] text-gray-500'>
                        Consultations
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-[30%] h-[420px] mb-[30px] overflow-y-scroll no-scrollbar border border-gray-200 bg-white p-5 mt-5 rounded-[10px]'>
            <div className='flex justify-between items-center w-full'>
                <div className='font-[700] leading-[24px]'>
                    Top-Performing Doctors
                </div>
            </div>
            <div className='font-[500] text-[10px] leading-[21px] text-gray-500'>
                See at a glance
            </div>
            <div>
                {
                    doctors.docs.map((doctor: DoctorItemType, index: number) => (
                        <PaymentItem key={index} {...doctor}/>
                    ))
                }
            </div>
        </div>
    )
}