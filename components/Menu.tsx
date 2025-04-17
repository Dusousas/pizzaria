import React, { useState } from 'react';

export default function Speciality() {
    const [activeCategory, setActiveCategory] = useState('SALGADAS');
    
    const categories = ['TODOS', 'SALGADAS', 'DOCES', 'VEGANAS', 'BEBIDAS'];
    
    const menuItems = [
        {
            id: 1,
            name: 'LIMONADA',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...',
            price: '$39.00',
            image: '/menu/drink1.png',
            category: 'BEBIDAS'
        },
        {
            id: 2,
            name: 'PIZZA - 4 QUEIJOS',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...',
            price: '$39.00',
            image: '/menu/salgada1.png',
            category: 'SALGADAS'
        },
        {
            id: 3,
            name: 'DOUGHNUT - MORANGO',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...',
            price: '$39.00',
            image: '/menu/doce1.png',
            category: 'DOCES'
        },

    ];

    const filteredItems = activeCategory === 'TODOS' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <>
            <section id='menu' className='bg-Dark py-20 relative'>
                <img className='absolute top-[-1px] w-full rotate-180' src="/lineupwhite.png" alt="" />
                <div className='maxW'>
                    <article className='w-full h-full flex gap-y-4 flex-col items-center justify-center mt-20'>
                        <h6 className='text-Orange text-3xl tracking-wide'>Fresh From Pizzon</h6>
                        <h1 className='text-white text-7xl uppercase font-black tracking-wider text-center'>Mais pedidos</h1>
                    </article>

                    <article>
                        {/* Menu Categories */}
                        <div className='flex justify-center mt-10 mb-12'>
                            <div className='bg-gray-900 rounded-full flex justify-center items-center overflow-hidden'>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={`px-6 py-3 cursor-pointer text-sm font-medium transition-colors ${
                                            activeCategory === category 
                                                ? 'bg-Orange text-white' 
                                                : 'text-white hover:bg-gray-700'
                                        }`}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 items-center justify-center'>
                            {filteredItems.map(item => (
                                <div key={item.id} className='flex flex-col items-center'>
                                    <div className='mb-4'>
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className='w-48 h-48 object-contain'
                                        />
                                    </div>
                                    <h3 className='text-white text-lg font-semibold mb-2'>{item.name}</h3>
                                    <p className='text-white tracking-wider text-sm text-center mb-4 max-w-xs'>{item.description}</p>
                                    <p className='text-Orange font-bold text-lg'>{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}