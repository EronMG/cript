import React, { useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaCopy } from 'react-icons/fa'
import ActiveButton from '../../utils'
import { ToastContainer, toast } from 'react-toastify'
import { RiResetLeftLine } from 'react-icons/ri'

const Links = [
    {
        id: 0,
        icon: <FaXTwitter />,
        title: 'Twitter'
    },
    {
        id: 1,
        icon: <FaTelegramPlane />,
        title: 'Telegram'
    },
    {
        id: 2,
        icon: <AiOutlineGlobal />,
        title: 'Website'
    }
]
const User = ({ UserImage, BuySell }) => {
    const notify = () => toast.success('Copy to clipboard!')
    const [amount, setAmount] = useState('0.0132')

    const handleQuickAmountChange = (value) => {
        setAmount(value)
    }

    const handleReset = () => {
        setAmount('0.0132')
    }
    return (
        <div className='flex flex-wrap gap-2 md:max-w-[350px]'>
            <div className='bg-primary rounded-2xl flex-1 max-w-[350px] w-full xx:max-w-[790px] md:max-w-[350px] p-4'>
                <div className='flex gap-3'>
                    <div className='w-20 flex flex-col gap-3'>
                        <img src={UserImage} className='w-20 h-20 rounded-md' alt='UserIcon' />
                        <button className='bg-blue text-white font-medium text-sm w-full flex justify-center items-center h-8 rounded-lg'>{BuySell}</button>
                    </div>
                    <div className='w-[226px]'>
                        <h2 className='text-white font-medium text-base'>I See U (ICU)</h2>
                        <p className='text-white opacity-70 text-xs'>For accurate details about the token, refer to its official documentation or whitepaper.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 pt-8'>
                    <div className='flex gap-1 flex-1'>
                        {Links.map((item, _) => (
                            <button className='flex items-center gap-1 rounded text-xs xs:text-base justify-center  font-medium bg-primaryBg h-7 w-full text-white' key={item.id}>
                                {item.icon}
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div className='bg-primaryBg flex justify-center items-center w-full rounded'>
                        <p className='text-white flex items-center text-xs xx:text-base gap-2'>
                            <span className={`opacity-70`}>Contract Address:</span> GpWoyh...GWc <FaCopy onClick={notify} className='cursor-pointer' />
                            <ToastContainer theme='dark' />
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-[350px] bg-primary flex-1 hidden sm:block p-4 rounded-2xl text-white'>
                <div className='flex mb-4'>
                    <button className={`flex-1 py-2 bg-blue rounded-l-lg `}>Buy</button>
                    <button className={`flex-1 py-2 rounded-r-lg border border-l-0 opacity-50 `}>Sell</button>
                </div>

                <div className='flex items-center bg-darkGray p-2 h-14 rounded-lg mb-4'>
                    <input type='text' className='bg-transparent flex-1 text-white text-lg focus:outline-none' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <span className='text-gray-400'>ETH</span>
                </div>

                <div className='flex justify-between gap-1 mb-4'>
                    <div className='flex gap-1'>
                        {['0.01', '0.05', '0.1', 'Max'].map((value) => (
                            <button key={value} className='bg-gray-700 px-3 py-1 rounded-lg text-sm bg-darkGray' onClick={() => handleQuickAmountChange(value)}>
                                {value}
                            </button>
                        ))}
                    </div>
                    <button className='bg-darkGray px-3 py-1 rounded-lg text-sm hover:bg-gray-600' onClick={handleReset}>
                        <RiResetLeftLine />
                    </button>
                </div>

                {/* Place Trade Button */}
                <button className='w-full py-2 bg-blue rounded-lg hover:bg-blue-600'>Place Trade</button>
            </div>
        </div>
    )
}

export default User
