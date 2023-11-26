import React from 'react'

export const InfoText = ({ title, description, children }) => {
  return (
    <section className='w-96 flex flex-col justify-center'>
        <h3 className='text-3xl'>{ title }</h3>
        <p className='mt-5'>
          { description }
        </p>
        {children}
    </section>
  )
}
