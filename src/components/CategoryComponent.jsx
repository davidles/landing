import React from 'react'
import { ImageComponent } from './ImageComponent';


export const CategoryComponent = ({ id,title, text, img }) => {
  return (
    <article id='article' className={`p-5 bg-white w-64 rounded-se-[40px] rounded-bl-[40px] 
    text-center  fade
    `}
    >
     
        <ImageComponent url={`${location.href}/src/assets/img/${img} `} alt={title}  h={'h-44'}  />
        <h3 className='font-bold text-black my-5  uppercase'>{ title }</h3>
        <p className='text-black'>
          {text}
        </p>

    </article>
  )
}


// export const CategoryComponent = ({ id,title, text, img }) => {
//   return (
//     <article id='article' className={`p-5 bg-white w-64 rounded-se-[40px] rounded-bl-[40px] 
//     text-center 
//     animate-fade-right animate-duration-[2000ms] animate-delay-[${id}00ms]
//     fade
//     `}
//     >
     
//         <ImageComponent url={`${location.href}/src/assets/img/${img} `} alt={title}  h={'h-44'}  />
//         <h3 className='font-bold text-black my-5  uppercase'>{ title }</h3>
//         <p className='text-black'>
//           {text}
//         </p>

//     </article>
//   )
// }
