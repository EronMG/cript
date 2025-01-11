import React from 'react'
import Chat from './Chat'
import User from './User'
import userImage from '../../assets/user.jpg'
import userImage2 from '../../assets/user-second.jpg'
import TradingChart from './TradingChart'
const MainScreen = () => {
    return (
        <>
            <section className='flex mt-5 md:mt-10 flex-col h-[1220px] md:h-[520px] md:flex-row gap-6 px-4'>
                <User BuySell={'Buy'} UserImage={userImage} />
                <TradingChart id='unique-chart-id' />
                <User BuySell={'Buy'} UserImage={userImage2} />
            </section>
        </>
    )
}

export default MainScreen
