import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            image: "perfil1.jpg",
            text: "What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!",
            name: "JOHN",
            position: "Designer"
        },
        {
            id: 2,
            image: "perfil1.jpg",
            text: "The best pizza in town, hands down! I ordered for my family gathering and everyone was impressed. The crust was perfect - crispy on the outside and soft inside. Delivery was on time and the pizzas were still hot when they arrived.",
            name: "SARAH",
            position: "Developer"
        },

    ];

    return (
        <>
            <section className='bg-white py-20'>
                <div className='maxW'>
                    <article className='w-full h-full flex gap-y-4 flex-col items-center justify-center'>
                        <h6 className='text-Orange text-3xl tracking-wide'>Fresh From Pizzon</h6>
                        <h1 className='text-Dark text-7xl uppercase font-black tracking-wider text-center'>Depoimentos</h1>
                    </article>

                    {/* SWIPER SLIDE */}
                    <div className="mt-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <article className='flex gap-6 justify-center items-center'>
                                        {/* IMG PERSONA */}
                                        <div>
                                            <img className='rounded-full border-4 border-Orange w-24 h-24 object-cover' src={testimonial.image} alt="Cliente" />
                                        </div>

                                        {/* DEPOIMENTO */}
                                        <div className='bg-gray-200 p-6 rounded-lg relative w-2/3'>
                                            {/* Triângulo */}
                                            <div className='absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-200'></div>

                                            <p className='text-Dark italic'>
                                                {testimonial.text}
                                            </p>
                                            <p className='mt-4 text-Orange font-bold'>{testimonial.name} - {testimonial.position}</p>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}