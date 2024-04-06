import React from 'react'
import Spline from "@splinetool/react-spline"
import { ConnectWallet } from "@thirdweb-dev/react";

const Hero = () => {
  return (
    <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden pl-32">
      <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text- font-black md:text-8xl '>E² Bond</h1>
          <h2 className='text-md md:text-2xl text-center text-white/50'>Unlocking Transparency</h2>
        </div>
        <p className='max-w-md text-2xl md:text-xl text-zinc-200 capitalize text-center'>Empowering transparent political funding through blockchain. Join us in reshaping democracy with integrity and trust</p>
        <div className='w-full flex items-center justify-center md:justify-start gap-4'>
       
          <ConnectWallet/>
          <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors border' >Contact</button>
        </div>
      </div>

      <div className='w-full md:h-2/3 md:w-[600px] flex items-center justify-center relative -z-10 bg-rd-500 '>
        {/* <Spline className="aspect-auto flex sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/mytvKHOk8swskC-c/scene.splinecode'/> */}
      </div>
    </header>
  )
}

export default Hero