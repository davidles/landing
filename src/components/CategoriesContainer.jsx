import React from 'react';
import { categories } from '../database/services.json';
import { CategoryComponent } from './CategoryComponent';

export const CategoriesContainer = () => {
  return (
    <section className='flex flex-col mt-40 '>
      <h2 className='text-3xl text-center mb-16'>Comprar por categoría</h2>
      <section className='flex flex-wrap justify-evenly ' >
        {
          categories.map(({ id, title, text, img }) => (
            <CategoryComponent key={id} id={id} title={title} text={text} img={img} />
          ))
        }
      </section>
    </section>
  )
}