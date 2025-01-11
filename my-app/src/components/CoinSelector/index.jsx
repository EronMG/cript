import React from 'react'
import LeftContainer from './LeftContainer'
import ProgressBar from './ProgressBar'
import { FaChevronLeft } from 'react-icons/fa'
import ActiveButton from '../../utils'

const TopSection = () => {
    return (
        <section className='mb-4 flex justify-center'>
            <div className='w-full '>
                <LeftContainer />
                <ProgressBar />
            </div>
        </section>
    )
}

export default TopSection
