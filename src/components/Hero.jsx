import React from 'react'
import img1 from '../assets/HeroTop.png'
import img2 from '../assets/HeroBottom.png'

export default function Hero() {
    return (
        <>
            <div>
                <img className="relative top-0 left-0 w-full h-full object-cover z-[-1]" src={img1} alt="Top Image" />
                <img className="static mt-[-210px] top-0 left-0 w-full h-full object-cover" src={img2} alt="Bottom Image" />
            </div>
            <div>
                <h1 className='pl-10 text-2xl mb-6 '>Creating a magical world for the kid in all of us.</h1>
            </div>
            <div className='my-8'>
            <button className="text-black font-bold border-2 rounded-full bg-white hover:shadow-black hover:border-4 border-black px-[22.7014px] py-[15.1342px] mr-2">🎁 Get a Lunchbox</button>
            <button className="text-white font-bold rounded-full bg-black hover:bg-orange-600 hover:border-4 border-black px-[22.7014px] py-[15.1342px] ml-2">⚔️ Play Now!</button>
            </div>
        </>
    )
}
