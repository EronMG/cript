import React from 'react'
import Logo from '../../assets/logo-item-Photoroom.png'
import ActiveButton from '../../utils'
import { FaChevronLeft } from 'react-icons/fa'
const Nav = () => {
    return (
        <nav className='mx-4 my-6 h-20 py-2 flex justify-between items-center flex-1 rounded-2xl'>
            <div className='flex items-center justify-between w-full gap-7'>
                <div className='flex gap-4 items-center'>
                    <img src={Logo} alt='Logo' className='w-20' />
                    <button className={`text-gray font-mono text-sm w-24 h-8 flex justify-center items-center gap-2 bg-primary rounded-lg ${ActiveButton}`}>
                        <FaChevronLeft />
                        Go back
                    </button>
                </div>
                <span className='text-gray sm:flex hidden  font-mono text-sm cursor-pointer'>How it works?</span>
            </div>
            {/* <button className='xx:w-[166px] xx:h-[38px] w-[122px] h-[26px] flex justify-center text-sm font-medium items-center bg-white rounded-lg font-mono'>Connect Wallet</button> */}
        </nav>
    )
}

export default Nav
