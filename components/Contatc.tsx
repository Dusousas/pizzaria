import React from 'react';
import Form from './subc/Form';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function About() {
    return (
        <>
            <section className='bg-Dark pt-20 pb-20 relative '>
                <img className='absolute top-[-1px] w-full rotate-180' src="/lineupwhite.png" alt="" />
                <div className='maxW flex flex-col justify-center gap-8 items-center lg:flex-row'>

                    <article className='w-full h-full flex gap-y-4 flex-col mt-20 lg:w-1/2'>
                        <h6 className='text-Orange text-3xl tracking-wide text-center lg:text-left'>Contatos</h6>
                        <h1 className='text-white text-7xl uppercase font-bold text-center lg:text-left'>Entre em contato</h1>
                        <p className='text-white text-center lg:text-left lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi perspiciatis amet a quod aperiam doloribus praesentium excepturi nulla eaque vitae, laudantium iusto eveniet error at animi deserunt expedita quidem eligendi vel voluptatem quia quae nesciunt eum! Voluptas at aliquam quam reprehenderit eum quasi, cupiditate autem odio ratione aliquid labore iusto.</p>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <a href=""><FaInstagramSquare className='text-Orange text-3xl' /></a>
                            <a href=""><FaFacebookSquare className='text-Orange text-3xl' /></a>
                            <a href=""><FaWhatsappSquare className='text-Orange text-3xl' /></a>
                        </div>

                    </article>

                    <article className='mt-10 lg:w-1/2 lg:mt-20'>
                        <Form />
                    </article>
                </div>
            </section>
        </>
    );
}