import React from 'react'

const ProgressBar = () => {
    return (
        <div className='flex pt-6 flex-1'>
            <div className='w-full h-3 rounded-lg bg-gradient-to-l blueGrad ' />
            <div className='w-full h-3 rounded-lg bg-gradient-to-r redGrad' />
        </div>
    )
}

export default ProgressBar
