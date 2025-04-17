import React from 'react';
import { motion } from 'framer-motion';

export default function Main() {
    return (
        <>
            <section className='relative bgMain h-[65vh] lg:h-[85vh] overflow-hidden'>
                <div className='maxW flex flex-col h-full'>
                    <article className='h-full flex flex-col gap-20 justify-end items-center lg:gap-10'>
                        <div>
                            <h1 className='uppercase text-center text-white text-5xl font-bold lg:text-8xl'>
                                Pizza de <span className='text-Orange'>qualidade</span>
                            </h1>
                            <p className='mt-6 uppercase tracking-wider text-Orange text-lg text-center lg:text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quae.
                            </p>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className='w-full flex justify-center relative'>
                                <img className='lg:w-[80%]' src="/banner-1.png" alt="Banner principal" />
                                
                                {/* Imagens com efeitos */}
                                <motion.img 
                                    className='absolute w-[10%] top-[30px] left-[120px] lg:top-[100px] lg:left-[400px]' 
                                    src="/banner2.png" 
                                    alt="Decorativa 1"
                                    initial={{ opacity: 0, x: -100, y: -200, rotate: -45 }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        duration: 1.2, 
                                        delay: 0.3,
                                        bounce: 0.4
                                    }}
                                />
                                <motion.img 
                                    className='absolute w-[25%] right-0 top-[30px] lg:right-[80px] lg:top-[30px] lg:w-[25%]' 
                                    src="/banner3.png" 
                                    alt="Decorativa 2"
                                    initial={{ opacity: 0, x: 200, y: -300, rotate: 30 }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        duration: 1.5, 
                                        delay: 0.6,
                                        bounce: 0.35
                                    }}
                                />
                                <motion.img 
                                    className='absolute w-[25%] left-0 lg:left-[130px] bottom-0 lg:w-[15%]' 
                                    src="/banner4.png" 
                                    alt="Decorativa 3"
                                    initial={{ opacity: 0, x: -150, y: 200, rotate: 15 }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        duration: 1.8, 
                                        delay: 0.9,
                                        bounce: 0.3
                                    }}
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <img className='absolute bottom-[-1px] w-full' src="/lineup.png" alt="" />
            </section>
        </>
    );
}
