import React from 'react'
import test from "../assets/testimg.webp";

const HumanChat = () => {
  return (
    <div className='flex gap-3 bg-[#343541] p-5 lg:gap-4 xl:gap-4 lg:px-40'>
        <div className='min-w-[33px] max-w-[33px]'>
            <img className='w-full rounded-sm pt-1' src={test} alt='HumanProfile' />
        </div>

        <div className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est similique neque fugit, accusamus cumque facere incidunt quod velit voluptates iste porro, repellendus eligendi ipsa excepturi nobis beatae. Numquam, ipsa!
        </div>

    </div>
  )
}

export default HumanChat