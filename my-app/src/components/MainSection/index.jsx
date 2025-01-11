import React, { act } from 'react'
import User from './User'
import userImage from '../../assets/user.jpg'
import stars from '../../assets/stars.svg'
import group from '../../assets/Group.svg'
import userImage2 from '../../assets/user-second.jpg'
import TradingChart from './TradingChart'
import ActiveButton from '../../utils'

const MainScreen = () => {
    return (
        <>
            <section className='flex mt-5 md:mt-10 flex-col  md:flex-row gap-2 px-2 xl:px-4'>
                <User BuySell={'Buy'} UserImage={userImage} />
                <div className='bg-primary w-full rounded-2xl p-4'>
                    <div className='flex justify-between px-5 mb-4 py-4 bg-primaryBg rounded-2xl'>
                        <div>
                            <h2 className='text-white font-semibold text-xl'>
                                The <span className='text-blue'>Winning</span> Coin will take the <span className='text-blue'>Prize</span>
                            </h2>
                            <button className={`${ActiveButton} text-gray text-xs  border-b-[1px] border-dotted`}>More info</button>
                        </div>
                        <button className={`${ActiveButton} w-[160px] text-white text-xl font-semibold h-[52px] relative rounded-xl bg-blue flex justify-center items-center `}>
                            500$ <img src={stars} alt='stars' className='absolute' />
                            <img src={group} alt='bg' className='absolute' />
                        </button>
                    </div>
                    <div className='h-[1220px] md:h-[920px]'>
                        <TradingChart id='unique-chart-id' />
                    </div>
                </div>
                <User BuySell={'Buy'} UserImage={userImage2} />
            </section>
        </>
    )
}

export default MainScreen
