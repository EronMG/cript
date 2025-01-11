import React from 'react'

const ProgressBar = () => {
    return (
        <div className='flex pt-6 px-4 flex-1'>
            <div className='w-full h-3 rounded-lg bg-gradient-to-l from-blue from-50% to-transparent to-100% ' />
            <div className='w-full h-3 rounded-lg bg-gradient-to-r from-redGradient from-50% to-transparent to-100%' />
        </div>
    )
}

export default ProgressBar
