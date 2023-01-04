import React from 'react'
import openAi from "../assets/open-ai-logo.svg";
import Typist from 'react-typist-component';

const GPTChat = () => {
  return (
    <div className='flex gap-3 bg-[#444654] p-5 lg:gap-4 xl:gap-4 lg:px-40'>
        <div className='min-w-[33px] max-w-[33px]'>
            <img className='w-full rounded-sm p-1.5 bg-[#10a37f]' src={openAi} alt='ChatGPT Profile' />
        </div>

        <div className=''>
            <Typist>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est similique neque fugit, accusamus cumque facere incidunt quod velit voluptates iste porro, repellendus eligendi ipsa excepturi nobis beatae. Numquam, ipsa!
            </Typist>
        </div>

    </div>
  )
}

export default GPTChat