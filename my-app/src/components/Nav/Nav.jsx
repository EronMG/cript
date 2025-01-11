import React from 'react'
import Logo from '../../assets/logo-item-Photoroom.png'
const Nav = () => {
    return (
        <nav className='mx-4 my-6 h-20 py-2 flex justify-between items-center flex-1 rounded-2xl'>
            <div className='flex items-center gap-7'>
                <img src={Logo} alt='Logo' className='w-20' />
                <span className='text-gray hidden sm:flex font-mono text-sm cursor-pointer'>How it works?</span>
            </div>
            <button className='xx:w-[166px] xx:h-[38px] w-[122px] h-[26px] flex justify-center text-sm font-medium items-center bg-white rounded-lg font-mono'>Connect Wallet</button>
        </nav>
    )
}

export default Nav
