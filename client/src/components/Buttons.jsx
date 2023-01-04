import React from 'react'

const Buttons = ({image, text, href}) => {
  return (
    <div className='flex gap-3 cursor-pointer hover:bg-gray-500/10 px-2 py-3 rounded-md'>
        <a href={href} className='flex gap-3'>
            <img className='w-4' src={image} />
            <span className='text-sm'>{text}</span>
        </a>
    </div>
  )
}

export default Buttons