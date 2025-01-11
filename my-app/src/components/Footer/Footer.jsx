import React from 'react'
import { IoIosWifi } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className='px-4 py-4 flex-1 bg-primary flex flex-col xs:flex-row xs:items-center justify-between'>
            <p className='text-xs font-mono text-white font-medium'>© Apex Team 2025</p>
            <div className='flex pt-4 xs:pt-0 gap-4 flex-col xs:flex-row xs:items-center'>
                <span className='text-green-600 flex text-xs font-medium items-center gap-2'>
                    <IoIosWifi />
                    24ms
                </span>
                <div className='h-3 w-[1px] hidden xs:block bg-gray' />
                <div className='flex gap-4 flex-col text-xs xs:flex-row font-mono text-white font-medium xs:items-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
