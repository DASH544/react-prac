import React from 'react'
import HeroImg from "/src/assets/hero.png" 
const Hero = () => {
  return (
  <>
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
      <div className='flex  justify-center py-16 md:pr-16 xl:pr-40 md:py-0'>
        <div className='text-center md:text-left space-y-6'>
          <p className='text-orange-600 uppercase font-semibold'>100% Satisfaction Guarantee</p>
          <h1>Find Your Perfect Tutor</h1>
          <p>
            We help you find perfect tutor for 1-on-1 lessons.
            It is 
            completely free and private
          </p>
          <button>Get Started</button>
          <button>See how it works</button>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero
