import React, {useState} from 'react'
import data from '../db.json'

function Feature() {

    const [items] = useState(data)

  return (
    <>
        <section className='p-10 my-10'>

           <div className='max-w-2xl text-center mx-auto'>
           <h2 className='text-4xl font-bold text-center tracking-wider'>Hottest Collections</h2>
            <p className='my-8 mb-10'>Ante ornare dictum dignissim erat natoque. Platea neque facilisis diam id venenatis. Ultrices dolor, ac vel consectetur. Gravida lobortis venenatis faucibus sed ipsum. Urna.</p>
           </div>

            <div className="grid md:grid-cols-3 gap-10">
            {items.feature.map((feat)=>{
                const {id, name, desc, image} = feat

                return (
                    <div key={id} >
                        <img src={image} alt="" className='cursor-pointer hover:opacity-75'/>
                        <h2 className='font-bold text-2xl text-center my-3'>{name}</h2>
                        <p className='text-center'>{desc}</p>
                    </div>
                )
            })}
            </div>
            

        </section>
    </>
  )
}

export default Feature