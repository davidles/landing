import React from 'react'
import { Button } from './Button'

export const ContainerButtons = () => {
  return (
    <section className="mt-8 flex gap-10">
    <Button text={'Buy Now'} />
    <Button text={'View more'}/>
    
  </section>
  )
}
