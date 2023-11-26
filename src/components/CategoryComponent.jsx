import React from 'react'
import { ImageComponent } from './ImageComponent'

export const CategoryComponent = ({ id,title, text, img }) => {
  return (
    <article className='p-5 bg-white w-64 rounded-se-[40px] rounded-bl-[40px] text-center shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]'>
     
        <ImageComponent url={`${location.href}/src/assets/img/${img} `} alt={title}  h={'h-44'}  />
        <h3 className='font-bold text-black my-5  uppercase'>{ title }</h3>
        <p className='text-black'>
          {text}
        </p>

    </article>
  )
}
