import React from 'react'
import { ContainerButtons } from './ContainerButtons';
import headset from "../assets/img/auriculares.png";
import { ImageComponent } from './ImageComponent';

export const HeadContainer = () => {
    return (
        <div className='flex justify-center'>
            <section className="flex flex-col w-96 animate-fade-right animate-once animate-duration-1000 animate-delay-700">
                <h1 className="font-bold 'font-[Open_Sauce]' uppercase">
                    Lamplight <div>Mobile Systems</div>
                </h1>
                <p className="font-light text-5xl mt-16">
                    Auriculares Westmire A56
                </p>
                <ContainerButtons />
            </section>
            <div className='animate-fade-left animate-once animate-duration-1000 animate-delay-700'>
                <ImageComponent url={headset} title={'Headset-portada'}/>

            </div>
        </div>
    )
}

// export const HeadContainer = () => {
//     return (
//         <div className='flex justify-center'>
//             <section className="flex flex-col w-96 animate-fade-right animate-once animate-duration-1000 animate-delay-700">
//                 <h1 className="font-bold 'font-[Open_Sauce]' uppercase">
//                     Lamplight <div>Mobile Systems</div>
//                 </h1>
//                 <p className="font-light text-5xl mt-16">
//                     Auriculares Westmire A56
//                 </p>
//                 <ContainerButtons />
//             </section>
//             <div className='animate-fade-left animate-once animate-duration-1000 animate-delay-700'>
//                 <ImageComponent url={headset} title={'Headset-portada'}/>

//             </div>
//         </div>
//     )
// }
