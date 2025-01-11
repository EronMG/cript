import React from 'react'
import LeftContainer from './LeftContainer'
import ProgressBar from './ProgressBar'
import { FaChevronLeft } from 'react-icons/fa'
import ActiveButton from '../../utils'

const TopSection = () => {
    return (
        <section className='pt-4 flex justify-center'>
            <button className={`text-gray font-mono text-sm w-24 h-8 flex justify-center items-center gap-2 bg-primary rounded-lg ${ActiveButton} absolute left-4`}>
                <FaChevronLeft />
                Go back
            </button>
            <div className='w-full max-w-[708px] xx:px-4'>
                <LeftContainer />
                <ProgressBar />
            </div>
        </section>
    )
}

export default TopSection
