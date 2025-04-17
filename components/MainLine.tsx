import React from 'react';
import { MdDeliveryDining, MdRestaurantMenu, MdOutlineLocalOffer } from 'react-icons/md';

export default function MainLine() {
    // Dynamic data for cards
    const cardsData = [
        {
            icon: MdDeliveryDining,
            title: "Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint alias voluptatem cumque beatae expedita porro eaque minus, ipsa sapiente a."
        },
        {
            icon: MdRestaurantMenu,
            title: "Quality Food",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint alias voluptatem cumque beatae expedita porro eaque minus, ipsa sapiente a."
        },
        {
            icon: MdOutlineLocalOffer,
            title: "Special Offers",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint alias voluptatem cumque beatae expedita porro eaque minus, ipsa sapiente a."
        }
    ];

    return (
        <>

            <section className="py-20 w-full bg-Orange">
                <div className="maxW mt-10">
                    <article className="flex flex-col w-full items-center justify-center gap-20 lg:flex-row">
                        {cardsData.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <div className="max-w-[300px]" key={index}>
                                    <Icon className="mx-auto text-7xl text-Dark hover:text-white" />
                                    <h1 className="text-center text-Dark uppercase text-3xl font-bold tracking-wider">{card.title}</h1>
                                    <p className="text-center text-Dark">{card.description}</p>
                                </div>
                            );
                        })}
                    </article>
                </div>
            </section>
        </>
    );
}