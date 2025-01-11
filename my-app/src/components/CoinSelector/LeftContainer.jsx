import React from 'react'
import userImage from '../../assets/user.jpg'
import userImage2 from '../../assets/user-second.jpg'
import graph from '../../assets/chart-bar-vertical.svg'
import versus from '../../assets/versus.svg'

const CoinContainer = ({ Username, title, cost, UserImage }) => {
    return (
        <div className='flex bg-primary items-center dd:flex-row flex-col-reverse xx:w-full w-[286px] xx:flex-wrap justify-between xx:justify-normal p-4 rounded-2xl gap-5'>
            <div className=' flex-col flex gap-4'>
                <div className=''>
                    <p className='text-white text-sm'>{Username}</p>
                    <span className='text-gray text-sm'>{title}</span>
                </div>
                <div>
                    <div className='flex  items-center gap-1'>
                        <img src={graph} alt='graph' />
                        <span className='text-xs text-gray'>Marketcap</span>
                    </div>
                    <p className='text-white font-medium'>{cost} USD</p>
                </div>
            </div>
            <img src={UserImage} alt='userIMG' className='w-20 rounded-md h-20' />
        </div>
    )
}
const LeftContainer = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-1 flex-row max-w-[708px] xx:flex-row items-center  justify-center gap-5 xx:gap-3 px-0 xx:px-0 w-full '>
                <CoinContainer Username={"Simon's Cat Twin"} title={'($HUGH)'} UserImage={userImage} cost={'32,982'} />
                <img src={versus} alt='versus' className='w-10' />
                <CoinContainer Username={'I See U'} title={'(ICU)'} UserImage={userImage2} cost={'32,982'} />
            </div>
        </div>
    )
}

export default LeftContainer
