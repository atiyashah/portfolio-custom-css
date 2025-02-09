
import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

interface Props {
    image: string;
    role: string;
    name: string
}

const ClientReview = ({ image, name, role }: Props) => {
    return (
        <div className='flex flex-col text-center justify-center'>
            <Image src={image} width={100} height={100} alt={name} objectFit="contain" className='mx-auto mb-[2rem] rounded-full'/>
            <div className='flex items-center mx-auto'>
                <FaStar className='w-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] text-yellow-500' />
                <FaStar className='w-[2rem] text-yellow-500' />
            </div>
            <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
            <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>

            <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
                After reviewing your portfolio, I am thoroughly impressed by her skills and creativity. Her projects showcase a strong command of modern web technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. The designs are not only visually appealing but also highly functional, reflecting her ability to balance aesthetics with usability. What stands out is her dedication to learning and exploring emerging fields like cloud computing and generative AI. <span className="font-bold">&apos;Your Name&apos;s</span> work speaks volumes about her passion and expertise, and I would highly recommend her to anyone looking for a talented and forward-thinking web developer.
            </p>
        </div>
    )
}

export default ClientReview
