import React, { useState } from 'react'
import {motion} from "framer-motion"
const NavbarBanner = () => {
    const [isOpenB,setBanner]=useState(true)
  return (
   isOpenB && (
<motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.7 }}
className='bg-yellow-400 text-center text-sm font-semibold p-1 hidden lg:block relative -mt-2.5'>
    Are you a university or school student for an online tutoring partnership <span className='hover:underline hover:cursor-pointer'>Talk to us?</span>
    <div className='absolute top-1/2 right-10 cursor-pointer -translate-y-1/2 'onClick={()=>setBanner((i)=>(!i))}>
        X
    </div>
</motion.div>   )
  )
}

export default NavbarBanner
