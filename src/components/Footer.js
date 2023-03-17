import React from 'react'
import logo from "../images/Flash.png"


function Footer() {
  return (
    <>
        <footer className='flex items-center justify-between mt-16 p-10 border-b border-slate-300'>
            <div>
                <ul className='text-xs lg:flex lg:items-center lg:justify-center lg:gap-5 md:text-sm'>
                    <li className='mb-2 lg:m-0'>Terms & conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className='flex items-center justify-center gap-1 mx-3'>
                    <img src={logo} alt="" />
                    <h1 className='text-lg lg:text-3xl font-bold'>ZEUS NFT</h1>
                </div>

            <div>
                <ul className='text-xs lg:flex lg:items-center lg:justify-center lg:gap-5 md:text-sm'>
                    <li>Cookies</li>
                    <li className='my-2'>Refunds</li>
                    <li>Licence</li>
                    
                </ul>
            </div>
        </footer>
        <p className='text-center text-xs'>Crafted by Tee Ai Darkson 🔥 </p>
    </>
  )
}

export default Footer