import React from 'react';

export default function About() {
    return (
        <>
            <section className='bg-white pt-20 pb-10 relative '>
                <img className='absolute top-[-1px] w-full rotate-180' src="/lineup.png" alt="" />
                <div className='maxW flex flex-col justify-center items-center lg:flex-row '>

                    <article className='w-full h-full flex gap-y-4 flex-col mt-20'>
                        <h6 className='text-Orange text-3xl tracking-wide text-center lg:text-left'>Sobre nós</h6>
                        <h1 className='text-Dark text-7xl uppercase font-bold text-center lg:text-left'>Sobre SUAEMPRESA</h1>
                        <p className='text-Dark text-center lg:text-left lg:w-[40%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi perspiciatis amet a quod aperiam doloribus praesentium excepturi nulla eaque vitae, laudantium iusto eveniet error at animi deserunt expedita quidem eligendi vel voluptatem quia quae nesciunt eum! Voluptas at aliquam quam reprehenderit eum quasi, cupiditate autem odio ratione aliquid labore iusto.</p>
                        <div className='mt-6 mx-auto lg:mx-0'>
                            <a className='bg-Dark border border-Orange text-white px-8 py-4 rounded-full uppercase font-semibold hover:bg-white hover:text-Orange' href="">Faça um pedido</a>
                        </div>
                    </article>

                    <article className='mt-20'>
                        <img src="about.png" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}