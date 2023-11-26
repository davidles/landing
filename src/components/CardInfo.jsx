import React from 'react'

export const CardInfo = ({ title, data }) => {
  return (
    <div>
        <h4 className='mt-10 mb-3 font-semibold uppercase'>{title}</h4>
        <p className='w-28 text-white'>
            { data }
        </p>
    </div>
  )
}
