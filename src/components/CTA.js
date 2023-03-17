import React from 'react'
import image from "../images/Image.png"
import one from "../images/Image-1.png"


function CTA() {
  return (
    <>
        <section className='lg:max-w-6xl mx-4 lg:mx-auto border border-purple-300 shadow-2xl rounded-3xl my-32 ring-offset-transparent'>
            <div className='flex items-center justify-center'>
                <img src={image} alt="" className='w-8 md:w-60 lg:96 invisible md:visible' />
                <div className=''>
                    <h2 className='font-bold text-2xl text-center my-3'>Ready to sell your NFTs?</h2>
                    <p className='my-8 mb-10 text-center'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
                    <button className='button py-2 px-4 rounded-lg text-white shadow-lg hover:opacity-75 font-bold mx-auto block my-4'>Sell right now</button>

                </div>
                <img src={one} alt="" className='w-8 md:w-60 lg:96 invisible md:visible' />
            </div>
        </section>
    </>
  )
}

export default CTA