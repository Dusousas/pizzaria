import React from 'react';

export default function Form() {
    return (
        <>
            <form className='bg-white py-10 px-10 w-full lg:px-20' action="">
                <h1 className='text-Dark uppercase font-semibold text-2xl'>Fale conosco</h1>
                <p className='text-Dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex flex-col gap-4 mt-6'>
                    <input className='border border-Dark text-Dark w-full px-2 py-2' placeholder='Nome' type="text" name="" id="" />
                    <input className='border border-Dark text-Dark w-full px-2 py-2' placeholder='Telefone' type="text" name="" id="" />
                    <textarea className='border border-Dark text-Dark w-full px-2 resize-none' placeholder='Sua mensagem...' rows={4} name="" id=""></textarea>
                    <div>
                        <button className='bg-Dark cursor-pointer text-white border border-Orange px-8 py-4 uppercase font-semibold hover:bg-white hover:text-Orange'>Enviar</button>
                    </div>
                </div>
            </form>
        </>
    );
}