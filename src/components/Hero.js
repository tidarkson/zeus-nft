import React from 'react'
import background from "../images/Background.png"
import background1 from "../images/Background shape.png"
import background2 from "../images/Background shape-1.png"
import background3 from "../images/Background shape-2.png"
import background4 from "../images/Background shape-3.png"
import logo from "../images/Logo.png"
import one from "../images/01.png"
import two from "../images/02.png"
import four from "../images/04.png"
import five from "../images/27.png"
import six from "../images/28.png"


function Hero() {
    return (
        <>
            <section style={{ backgroundImage: `url(${background})` }} className='flex items-center justify-between px-10'>
                <div className='grid grid-cols gap-12 -ml-20'>
                    <img src={background1} alt="" className='' />
                    <img src={background3} alt="" className='' />
                </div>

                <div className='flex flex-col text-center items-center gap-5 mt-10'>
                    <h1 className='text-2xl font-semibold md:text-6xl md:font-bold tracking-wide w-3/4'>Create & sell <br></br>your NFTs today 🚀 </h1>
                    <p className='text-xs md:text-base'>Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet. Ornare <br></br>lacinia vitae at vestibulum morbi. Volutpat libero curabitur feugiat risus dui pulvinar. Elementum.</p>
                    <button className='button py-2 px-4 rounded-lg text-white shadow-lg hover:opacity-75 font-bold'>Let's sell</button>
                </div>

                <div className='grid grid-cols gap-12 -mr-8'>
                    <img src={background2} alt="" className='' />
                    <img src={background4} alt="" />
                </div>
            </section>
            <section className='my-12 px-10 md:ml-8'>
                <div className='grid grid-cols-3 lg:flex items-center justify-center gap-5'>
                    <img src={six} alt="" />
                    <img src={one} alt="" />
                    <img src={four} alt="" />
                    <img src={logo} alt="" />
                    <img src={five} alt="" />
                    <img src={two} alt="" />
                </div>

            </section>
        </>
    )
}

export default Hero