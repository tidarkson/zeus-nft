import React from 'react'
import logo from "../images/Flash.png"

function Header() {
    return (
        <>
            <nav className='flex items-center justify-between p-10 border-b border-slate-300'>
                <div>
                    <ul className='hidden lg:flex lg:items-center lg:justify-center lg:gap-5 text-sm' >
                        <li><button>Home</button></li>
                        <li><button>University</button></li>
                        <li><button>Courses</button></li>
                    </ul>
                </div>

                <div className='flex items-center justify-center gap-1'>
                    <img src={logo} alt="" />
                    <h1 className='text-lg lg:text-3xl font-extrabold'>ZEUS NFT</h1>
                </div>

                <div>
                    <ul className='hidden lg:flex lg:items-center lg:justify-center lg:gap-5 text-sm'>
                        <li><button>Use cases</button></li>
                        <li><button>Plans</button></li>
                        <li><button>Resourses</button></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header