import React from 'react';
import NavBar from './subc/NavBar';

export default function Header() {
    return (
        <>
            <header className='py-6 absolute w-full z-10 bg-transparent'>
                <div className='maxW flex justify-between items-center'>

                    <div>
                        <a className='font-Pacifico text-5xl text-white' href=""><span className='text-Orange'>Sua</span> logo</a>
                    </div>
                   <NavBar />
                </div>
            </header>
        </>
    );
}