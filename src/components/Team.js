import React from 'react'
import team from "../images/Image Wrapper.png"
import team1 from "../images/Image Wrapper-1.png"
import team2 from "../images/Image Wrapper-2.png"
import team3 from "../images/Image Wrapper-3.png"


function Team() {
    return (
        <>
            <section className='p-10 my-10'>

                <div className='max-w-2xl text-center mx-auto'>
                    <h2 className='text-4xl font-bold text-center tracking-wider'>Our Team</h2>
                    <p className='my-10 mb-16'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
                </div>


                <div className='grid grid-cols-2 gap-4 md:flex md:gap-12 items-center justify-center my-10 w-full lg:gap-x-40'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={team} alt="" />
                        <h3 className='my-3 font-bold'>Guy Hawkins</h3>
                        <p className=''>CEO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={team1} alt="" />
                        <h3 className='my-3 font-bold'>Jane Cooper</h3>
                        <p className=''>COO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={team2} alt="" />
                        <h3 className='my-3 font-bold'>Darell Steward</h3>
                        <p className=''>CTO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={team3} alt="" />
                        <h3 className='my-3 font-bold'>Diane Russell</h3>
                        <p className=''>CDO</p>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Team