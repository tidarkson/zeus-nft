import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { ImStatsBars2 } from 'react-icons/im'
import { GiPadlock } from 'react-icons/gi'
import { FaScroll } from 'react-icons/fa'



function Services() {
    return (
        <>
            <section>
                <div className='px-5 max-w-2xl text-center mx-auto'>
                    <h2 className='text-4xl font-bold text-center tracking-wider'>We Provide</h2>
                    <p className='my-8 mb-10'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
                </div>

                <div className='grid grid-col md:grid-cols-2 lg:flex items-center justify-center px-20 gap-12'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl text-blue-600'><AiTwotoneHome /></p>
                        <h2 className='font-bold text-2xl text-center my-3'>Host your NFTs</h2>
                        <p className='text-center'>Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl text-blue-600'><ImStatsBars2 /></p>
                        <h2 className='font-bold text-2xl text-center my-3'>See your sales</h2>
                        <p className='text-center'>Integer ante non nunc, eget est justo vel semper nunc. Lacus </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl text-blue-600'><GiPadlock /></p>
                        <h2 className='font-bold text-2xl text-center my-3'>Secure wallet</h2>
                        <p className='text-center'>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl text-blue-600'><FaScroll /></p>
                        <h2 className='font-bold text-2xl text-center my-3'>No scam</h2>
                        <p className='text-center'>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services